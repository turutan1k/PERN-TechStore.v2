const { DeviceName } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class deviceNameController {
    async create(req, res) {
        const { name } = req.body
        const deviceName = await DeviceName.create({ name })
        return res.json({ deviceName })
    }

    async getAll(req, res) {
        const deviceNames = await DeviceName.findAll()
        return res.json(deviceNames)
    }
}

module.exports = new deviceNameController()
