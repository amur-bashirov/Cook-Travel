const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { postProxy } = require('./postProxy')(httpServer);
const wsInstance = postProxy(httpServer);

const { Post } = require("./post.js")

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;
// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);





// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});
  
  // GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
  
  // DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});
  
  // Middleware to verify that the user is authorized to call an endpoint
  const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  };
  
  
  
  // Default error handler
  app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });
  
  // Return the application's default page if the path is unknown
  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });


  async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await DB.addUser(user);
  
    return user;
  }
  
  async function findUser(field, value) {
    if (!value) return null;
  
    if (field === 'token') {
      return DB.getUserByToken(value);
    }
    return DB.getUser(value);
  }
  
  // setAuthCookie in the HTTP response
  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


  async function sortPostsByLikes(posts) {
    return posts.sort((a, b) => b.likes - a.likes);
  }
  


  apiRouter.get('/posts', verifyAuth, async (req, res) => {
    const { type, country, region, district } = req.query;
  
    try {
      // Fetch all posts from the database
      const allPosts = await DB.getAllPosts();
  
      // Use the searchPosts method to filter posts
      const filteredPosts = Post.searchPosts({
        type,
        country,
        region,
        district,
        posts: allPosts
      });
  
      // Sort the filtered posts by likes in descending order
      const sortedPosts = await sortPostsByLikes(filteredPosts);
  
      res.status(200).send(sortedPosts);
    } catch (error) {
      console.error('Error retrieving posts:', error);
      res.status(500).send({ msg: 'Internal server error.' });
    }
  });
  

  apiRouter.post('/posts', verifyAuth, async (req, res) => {
    const { type, country, region, district, description } = req.body;
  
    // Validate required fields
    if (!type || !country || !region || !district || !description) {
      return res.status(400).send({ msg: 'Missing required fields.' });
    }
  
    // Create the new post
    const newPost = new Post(type, country, region, district, description);
  
    try {
      // Add the new post to the database
      await DB.addPost(newPost);
      res.status(201).send(newPost);
    } catch (error) {
      console.error('Error adding new post:', error);
      res.status(500).send({ msg: 'Internal server error.' });
    }
  });
  


// Endpoint to toggle likes on a specific post
apiRouter.post('/posts/:postId/like', verifyAuth, async (req, res) => {
  const { postId } = req.params;
  const likerUserName = req.body.userName; // This is the liker

  // Validate that likerUserName is provided
  if (!likerUserName) {
    return res.status(400).send({ msg: 'Missing userName.' });
  }

  try {
    // Toggle the like status in the database (this function updates the likes and likedBy array)
    await DB.toggleLike(postId, likerUserName);

    // Retrieve the updated post from the database.
    // The updated post should include the original post owner's username in updatedPost.userName.
    const updatedPost = await DB.getPostById(postId);
    if (!updatedPost) {
      return res.status(404).send({ msg: 'Post not found after update.' });
    }

    // Send an alert to the post owner (the one stored in the post data)
    wsInstance.sendMessageToUser(updatedPost.userName, {
      type: 'alert',
      text: 'Your post was liked!'
    });

    res.status(200).send(updatedPost);
  } catch (error) {
    console.error('Error toggling like:', error);
    res.status(500).send({ msg: 'Internal server error.' });
  }
});

