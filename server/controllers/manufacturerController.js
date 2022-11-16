const { Manufacturer } = require("../models/models")
const { ApiError } = require("../errors/ApiError")

class manufacturerController {
    async create(req, res) {
        const { name } = req.body
        const manufacturer = await Manufacturer.create({ name })
        return res.json({ manufacturer })
    }

    async getAll(req, res) {
        const manufacturers = await Manufacturer.findAll()
        return res.json(manufacturers)
    }
}

module.exports = new manufacturerController()
