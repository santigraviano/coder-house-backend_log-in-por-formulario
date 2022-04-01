class AuthController {
  loginForm(req, res) {
    res.render('auth/login')
  }

  login(req, res) {
    req.session.username = req.body.username
    res.redirect('/')
  }

  logout(req, res) {
    const { username } = req.session
    req.session.destroy()
    res.render('auth/logout', { username })
  }
}

export default new AuthController()