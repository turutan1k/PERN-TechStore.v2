const { Resolution } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class resolutionController {
    async create(req, res) {
        const { name } = req.body
        const resolution = await Resolution.create({ name })
        return res.json({ resolution })
    }

    async getAll(req, res) {
        const resolutions = await Resolution.findAll()
        return res.json(resolutions)
    }
}

module.exports = new resolutionController()
