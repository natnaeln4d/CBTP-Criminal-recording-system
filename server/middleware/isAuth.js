module.exports = (req, res, next) => {
  //If the user isnot authenticated
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
};
