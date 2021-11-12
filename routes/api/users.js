const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Cart = require('../../models/Cart');

// @route     POST api/users
// @desc      Register user
// @access    Public
router.post(
  '/',
  [
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      // Get users gravitar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mp',
      });
      user = new User({
        name,
        email,
        password,
        avatar,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      // Get id of the user
      const currUser = await User.findOne({ email });
      const { id } = currUser;

      // Instantiate settings for registering user
      const cart = new Cart({ user: id });
      await cart.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/users/:user_id
// @desc      Update user password
// @access    Private
router.put(
  '/:user_id',
  [
    auth,
    [
      check(
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.user.id !== req.params.user_id) {
      return res.status(400).json({ errors: [{ msg: 'Not Authorized' }] });
    }

    let { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    try {
      const user = await User.findOneAndUpdate(
        { user: req.params.user_id },
        { password: password },
        { new: true }
      );

      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
