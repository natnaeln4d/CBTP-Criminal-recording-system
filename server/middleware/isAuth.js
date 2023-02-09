module.exports = (req, res, next) => {
  //If the user isnot authenticated, redirect to login
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
};
