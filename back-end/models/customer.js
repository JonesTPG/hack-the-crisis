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
    required: true
  },
  where: {
    type: String
  },
  whereCoords: {
    type: [Number],
    minlength: 2,
    maxlength: 2
  },
  what: {
    type: String
  },
  when: {
    type: String
  },
  whenOrdered: {
    type: String
  }
});

module.exports = mongoose.model('Customer', schema);
