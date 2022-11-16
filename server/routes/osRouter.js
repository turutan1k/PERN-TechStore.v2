const Router = require('express')
const router = new Router()
const osController = require('../controllers/osController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), osController.create)
router.get('/', osController.getAll)


module.exports = router