const authMiddleware = (req, res, next) => {
  if (!req.session.username) {
    return res.redirect('/login')
  }
  return next()
}

export default authMiddleware