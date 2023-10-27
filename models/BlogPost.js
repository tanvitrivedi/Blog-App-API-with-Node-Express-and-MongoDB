const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
