const guestMiddleware = (req, res, next) => {
  if (req.session.username) {
    return res.redirect('/')
  }
  return next()
}

export default guestMiddleware