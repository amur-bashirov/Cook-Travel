import { v4 as uuidv4 } from 'uuid';
export class Post {
  constructor(type, country, region, district, description) {
    this.id = uuidv4(); // Unique identifier for the post
    this.type = type;
    this.country = country;
    this.region = region;
    this.district = district;
    this.description = description;
    this.likes = 0;
    this.likedBy = []; // Track users who have liked the post
    this.date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }

  /**
   * Toggle like status for a user.
   * @param {string} userName
   */
  hasUserLiked(userName) {
    return this.likedBy.includes(userName);
  }

  

  /**
   * Add a like from a user if they haven't already liked the post.
   * @param {string} userName - The user's name.
   */
    addLike(userName, posts) {
    if (!this.hasUserLiked(userName)) {
      this.likedBy.push(userName);
      this.likes++;
    } else {
      this.likedBy = this.likedBy.filter(user => user !== userName);
      this.likes--;
    }

    // Remove the current post from the posts array
    posts = posts.filter(post => post.id !== this.id);

    // Find the index to insert the post before the first post with equal likes
    const insertIndex = posts.findIndex(post => post.likes === this.likes);

    // If such a post is found, insert before it; otherwise, append to the end
    if (insertIndex !== -1) {
      posts.splice(insertIndex, 0, this);
    } else {
      posts.push(this);
    }

    return posts
  }


  static searchPosts({ type, country, region, district, posts} = {}) {


    if (type && type !== 'everything') {
      posts = posts.filter(post => post.type === type);
    }
    if (country) {
      posts = posts.filter(post => post.country === country);
    }
    if (region) {
      posts = posts.filter(post => post.region === region);
    }
    if (district) {
      posts = posts.filter(post => post.district === district);
    }
    console.log("Searched posts inside searchPosts:", posts);
    return posts;
  }
}

// A static property to hold all posts in memory.
Post.posts = [];
