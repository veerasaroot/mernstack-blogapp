const router = require('express').Router()

const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const registerController = require('../controllers/registerController')

router.get('/', homeController)
router.post('/login', loginController)
router.post('/register', registerController)

module.exports = router