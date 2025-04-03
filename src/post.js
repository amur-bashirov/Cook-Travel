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

  

  toggleLike(userName) {
    console.log("Before toggling, likedBy:", this.likedBy);
    if (!this.hasUserLiked(userName)) {
      this.likedBy.push(userName);
      this.likes++;
      console.log(`Added like for ${userName}`);
    } else {
      this.likedBy = this.likedBy.filter(user => user !== userName);
      this.likes--;
      console.log(`Removed like for ${userName}`);
    }
    console.log("After toggling, likedBy:", this.likedBy);
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

// A static property to hold all posts in memor
