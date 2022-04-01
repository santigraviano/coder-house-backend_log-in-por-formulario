import { Router } from 'express'
import controller from '../controllers/auth.controller.js'
import guestMiddleware from '../middlewares/guest.js'
import authMiddleware from '../middlewares/auth.js'

const router = new Router()

router.get('/login', guestMiddleware, controller.loginForm)
router.post('/login', guestMiddleware, controller.login)
router.post('/logout', authMiddleware, controller.logout)

export default router