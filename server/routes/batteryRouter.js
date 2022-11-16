const Router = require('express')
const router = new Router()
const batteryController = require('../controllers/batteryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), batteryController.create)
router.get('/', batteryController.getAll)


module.exports = router