const router = require('express').Router();

const routes = ['users', 'session', 'businesses'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
