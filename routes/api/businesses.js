const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const BusinessRepository = require('../../db/business-repository');
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

const businessEmail =
  check('businessEmail')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const businessName =
  check('businessName')
    .not().isEmpty()
    .withMessage('Please provide a business name');

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

router.post('/', businessEmail, password, businessName, asyncHandler(async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }

  const business = await BusinessRepository.create(req.body);

  const { jti, token } = generateToken(business);
  business.tokenId = jti;
  await business.save();
  res.json({ token, business: business.toSafeObject() });
}));

router.get('/me', authenticated, function (req, res) {
  res.json({
    email: req.business.businessEmail,
    name: req.business.businessName,
  });
});

module.exports = router;
