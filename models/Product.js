const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Product = mongoose.model('product', ProductSchema);
