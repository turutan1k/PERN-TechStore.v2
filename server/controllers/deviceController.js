const uuid = require("uuid")
const path = require("path")
const { Device } = require("../models/models")
const ApiError = require("../errors/ApiError")

class deviceController {
    async create(req, res, next) {
        try {
            const {
                model,
                releaseDate,
                guaranteePeriod,
                price,
                deviceNameId,
                manufacturerId,
                batteryId,
                colorId,
                countryId,
                osId,
                resolutionId,
            } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, "..", "static", fileName))

            const device = await Device.create({
                model,
                releaseDate,
                guaranteePeriod,
                price,
                deviceNameId,
                manufacturerId,
                batteryId,
                colorId,
                countryId,
                osId,
                resolutionId,
                img: fileName,
            })

            return res.json({ device })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { deviceNameId, manufacturerId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices
        if (!deviceNameId && !manufacturerId) {
            devices = await Device.findAndCountAll({ limit, offset })
        }
        if (deviceNameId && !manufacturerId) {
            devices = await Device.findAndCountAll({
                where: { deviceNameId },
                limit,
                offset,
            })
        }
        if (!deviceNameId && manufacturerId) {
            devices = await Device.findAndCountAll({
                where: { manufacturerId },
                limit,
                offset,
            })
        }
        if (deviceNameId && manufacturerId) {
            devices = await Device.findAndCountAll({
                where: { deviceNameId, manufacturerId },
                limit,
                offset,
            })
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const { id } = req.params
        const device = await Device.findOne({ where: { id } })
        return res.json(device)
    }
}

module.exports = new deviceController()
