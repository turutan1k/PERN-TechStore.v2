const { Battery } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class batteryController {
    async create(req, res) {
        const { name } = req.body
        const battery = await Battery.create({ name })
        return res.json({ battery })
    }

    async getAll(req, res) {
        const batteries = await Battery.findAll()
        return res.json(batteries)
    }
}

module.exports = new batteryController()
