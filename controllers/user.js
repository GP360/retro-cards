const User = require('../models/User');

/**
 * GET /login
 *
 * the login page
 *
 * @param object req
 * @param object res
 * @return {Void}
 */
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('account/login', {
    title: 'Login'
  });
};


/**
 * GET /account
 * Profile page.
 */
exports.getAccount = (req, res) => {
  res.render('account/profile', {
    title: 'Account Management'
  });
};

/* End of file user.js */
/* Location: ./controllers/user.js */
