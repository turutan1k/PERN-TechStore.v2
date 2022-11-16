const Router = require('express')
const router = new Router()
const deviceNameController = require('../controllers/deviceNameController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), deviceNameController.create)
router.get('/', deviceNameController.getAll)


module.exports = router