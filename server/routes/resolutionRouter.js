const Router = require('express')
const router = new Router()
const resolutionController = require('../controllers/resolutionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), resolutionController.create)
router.get('/', resolutionController.getAll)


module.exports = router