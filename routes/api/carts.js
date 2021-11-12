const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Product = require('../../models/Product');
const Cart = require('../../models/Cart');

// @route     GET api/carts/:id
// @desc      Get cart by id
// @access    Private
router.get('/:id', auth, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }

    if (cart.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not Authorized' });
    }

    res.json(cart);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Cart not found' });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
