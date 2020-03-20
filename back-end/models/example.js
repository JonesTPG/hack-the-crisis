const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  field1: {
    type: String,
    minlength: 3,
    required: true
  },
  field2: {
    type: String,
    minlength: 3
  }
});

module.exports = mongoose.model('Example', schema);
