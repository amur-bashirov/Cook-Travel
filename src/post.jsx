// post.js
export class Post {
  constructor(type, country, region, district, description) {
    this.id = Date.now(); // Unique identifier for the post
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

    // Instead of using localStorage, add the post to a server‑side store.
    Post.posts.push(this);
  }

  /**
   * Toggle like status for a user.
   * @param {string} userName
   */
  addLike(userName) {
    if (!this.likedBy.includes(userName)) {
      this.likedBy.push(userName);
      this.likes++;
    } else {
      this.likedBy = this.likedBy.filter(user => user !== userName);
      this.likes--;
    }
  }

  /**
   * Filter posts based on type, country, region, and district.
   * (This is the same filtering logic you had.)
   */
  static searchPosts({ type, country, region, district } = {}) {
    let posts = Post.posts;
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
