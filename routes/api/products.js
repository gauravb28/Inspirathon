const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Product = require('../../models/Product');

// @route     GET api/products
// @desc      Get all products
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// @route     GET api/products/:id
// @desc      Get product by id
// @access    Private
router.get('/:id', auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Product not found' });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
