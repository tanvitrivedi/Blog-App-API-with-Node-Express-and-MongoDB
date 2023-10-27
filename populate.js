const mongoose = require('mongoose');

// Import your Mongoose models (User, BlogPost, Comment)
const User = require('./models/User');
const BlogPost = require('./models/BlogPost');
const Comment = require('./models/Comment');

mongoose.connect('mongodb://localhost/blog-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Sample user data
const sampleUsers = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' }
];

// Sample blog post data
const sampleBlogPosts = [
  { title: 'First Post', content: 'This is the first post.', author: null },
  { title: 'Second Post', content: 'This is the second post.', author: null }
];

// Sample comment data
const sampleComments = [
  { commenter: 'Commenter1', text: 'Comment 1', blogPost: null },
  { commenter: 'Commenter2', text: 'Comment 2', blogPost: null }
];

async function populateDatabase() {
  try {
    // Create sample users
    const users = await User.create(sampleUsers);

    // Assign users as authors for blog posts
    sampleBlogPosts[0].author = users[0];
    sampleBlogPosts[1].author = users[1];

    // Create sample blog posts
    const blogPosts = await BlogPost.create(sampleBlogPosts);

    // Assign blog posts to comments
    sampleComments[0].blogPost = blogPosts[0];
    sampleComments[1].blogPost = blogPosts[1];

    // Create sample comments
    await Comment.create(sampleComments);

    console.log('Sample data inserted into the database.');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

populateDatabase();
