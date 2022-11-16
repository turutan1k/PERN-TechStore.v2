const { Os } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class osController {
    async create(req, res) {
        const { name } = req.body
        const os = await Os.create({ name })
        return res.json({ os })
    }

    async getAll(req, res) {
        const oses = await Os.findAll()
        return res.json(oses)
    }
}

module.exports = new osController()
