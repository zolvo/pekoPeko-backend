const { User } = require('./models');

class NullUser {
  isValid() { return false; }
  setPassword() { }
  validatePassword() { return false; }
  toSafeObject() { return {}; }
}

async function create(details) {
  const user = await User.build(details);
  user.setPassword(details.password);
  return await user.save();
}

async function findByEmail(userEmail) {
  const user = await User.findOne({ where: { userEmail } });
  return user || new NullUser();
}

async function findByTokenId(tokenId) {
  const user = await User.findOne({ where: { tokenId } });
  return user || new NullUser();
}

module.exports = {
  create,
  findByEmail,
  findByTokenId,
};
