class MainController {
  index(req, res) {
    const { username } = req.session
    res.render('index', { username })
  }
}

export default new MainController()