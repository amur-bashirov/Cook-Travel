export class Post {
  constructor(type, country, region, district, description) {
    this.id = Date.now(); // Unique identifier for the post
    this.type = type;
    this.country = country;
    this.region = region;
    this.district = district;
    this.description = description;
    this.likes = 0;
    this.likedBy = []; // Array to track users who have liked the post
    this.date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    // Retrieve existing posts from localStorage
    const storedPosts = localStorage.getItem('posts');
    let posts = storedPosts ? JSON.parse(storedPosts) : [];

    // Save the current instance to the posts array
    posts.push(this);

    // Update localStorage
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  /**
   * Check if a user has liked the post.
   * @param {string} userName - The user's name.
   * @returns {boolean} - True if the user has liked the post; otherwise, false.
   */
  hasUserLiked(userName) {
    return this.likedBy.includes(userName);
  }

  /**
   * Add a like from a user if they haven't already liked the post.
   * @param {string} userName - The user's name.
   */
  addLike(userName) {
    if (!this.hasUserLiked(userName)) {
      this.likedBy.push(userName);
      this.likes++;

      // Retrieve existing posts from localStorage
      const storedPosts = localStorage.getItem('posts');
      let posts = storedPosts ? JSON.parse(storedPosts) : [];

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

      // Update localStorage
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }
}
