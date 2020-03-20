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
  email: {
    type: String,
    unique: true
  },
  location: {
    type: [Number],
    minlength: 2,
    maxlength: 2
  },
  products: {
    type: [String]
  },
  services: {
    type: [String]
  }
});

module.exports = mongoose.model('Provider', schema);
