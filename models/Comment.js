const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commenter: String,
  text: String,
  blogPost: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' },
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
