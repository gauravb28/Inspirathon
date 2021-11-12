const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Cart = mongoose.model('cart', CartSchema);
