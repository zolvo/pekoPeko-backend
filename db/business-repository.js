const { Business } = require('./models');

class NullBusiness {
  isValid() { return false; }
  setPassword() { }
  isValidPassword() { return false; }
  toSafeObject() { return {}; }
}

async function create(details) {
  const business = await Business.build(details);
  business.setPassword(details.password);
  return await business.save();
}

async function findByEmail(email) {
  const business = await Business.findOne({ where: { email } });
  return business || new NullBusiness();
}

async function findByTokenId(tokenId) {
  const business = await Business.findOne({ where: { tokenId } });
  return business || new NullBusiness();
}

module.exports = {
  create,
  findByEmail,
  findByTokenId,
};
