const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('Cook-Travel');
const userCollection = db.collection('user');
const postCollection = db.collection('posts');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Database connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addPost(post) {
  return postCollection.insertOne(post);
}

async function getAllPosts() {
    return await postCollection.find({}).toArray();
  }
async function getAllPostsSortedByLikes() {
return await postCollection.find({}).sort({ likes: -1 }).toArray();
}
    
async function toggleLike(postId, userName) {
    const post = await postCollection.findOne({ id: postId });
  
    if (!post) {
      throw new Error('Post not found');
    }
  
    const hasUserLiked = post.likedBy.includes(userName);
  
    const updateQuery = hasUserLiked
      ? { $pull: { likedBy: userName }, $inc: { likes: -1 } }
      : { $addToSet: { likedBy: userName }, $inc: { likes: 1 } };
  
    await postCollection.updateOne({ id: postId }, updateQuery);
  }
  



module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addPost,
  getAllPosts,
  getAllPostsSortedByLikes,
  toggleLike
};