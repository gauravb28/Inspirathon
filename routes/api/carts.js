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

// @route     POST api/carts/product/:id
// @desc      Add product to cart
// @access    Private
router.post('/product/:id', auth, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    cart.products.forEach((product) => {
      if (product.product.toString() === req.body.product) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Product already added to cart' }] });
      }
    });

    const newProduct = {
      product: req.body.product,
    };

    if (cart.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not Authorized' });
    }

    cart.products.unshift(newProduct);

    await cart.save();
    res.json(cart.products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/carts/product/:id/:product_id
// @desc      Remove product from cart
// @access    Private
router.delete('/product/:id/:product_id', auth, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    // Pull out product
    const product = cart.products.find(
      (product) => product.product.toString() === req.params.product_id
    );

    // Make sure product exists
    if (!product) {
      return res.status(404).json({ msg: 'Product does not exist' });
    }

    // Check user
    if (cart.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not Authorized' });
    }

    // Get remove index
    const removeIndex = cart.products
      .map((product) => product.product.toString())
      .indexOf(req.params.product_id);
    cart.products.splice(removeIndex, 1);

    await cart.save();
    res.json(cart.products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
