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
  email: {
    type: String
  }
});

module.exports = mongoose.model('Provider', schema);
