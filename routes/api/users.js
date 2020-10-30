const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const UserRepository = require('../../db/user-repository');
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

const userZip =
  check('userZip')
    .isEmail()
    .withMessage('Please provide a valid Zip code')
    .normalizeEmail();

const firstName =
  check('firstName')
    .not().isEmpty()
    .withMessage('Please provide a first name');

const lastName =
  check('lastName')
    .not().isEmpty()
    .withMessage('Please provide a last name');

const userEmail =
  check('userEmail')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

router.post('/', userEmail, password, firstName, asyncHandler(async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }

  const user = await UserRepository.create(req.body);

  const { jti, token } = generateToken(user);
  user.tokenId = jti;
  await user.save();
  res.json({ token, user: user.toSafeObject() });
}));

router.get('/me', authenticated, function (req, res) {
  res.json({
    email: req.user.userEmail,
    name: req.user.userName,
  });
});

module.exports = router;
