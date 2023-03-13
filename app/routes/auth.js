const express = require('express');
const router = express.Router();
const passport = require('passport');

// Middleware for checking authentication status
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Protected route that requires authentication
router.get('/profile', isAuthenticated, (req, res) => {
  res.render('profile', { user: req.user });
});

module.exports = router;
