
const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now
  },
  info: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Entry', entrySchema);
