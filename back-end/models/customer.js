const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true
  },
  phone: {
    type: Number,
    minlength: 6,
    required: true,
    unique: true
  },
  where: {
    type: [Number],
    minlength: 2,
    maxlength: 2
  },
  what: {
    type: String
  },
  when: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Customer', schema);
