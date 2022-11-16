const Router = require("express")
const router = new Router()

const userRouter = require("./userRouter")
const deviceRouter = require("./deviceRouter")
const deviceNameRouter = require("./deviceNameRouter")
const resolutionRouter = require("./resolutionRouter")
const manufacturerRouter = require("./manufacturerRouter")
const countryRouter = require("./countryRouter")
const osRouter = require("./osRouter")
const colorRouter = require("./colorRouter")
const batteryRouter = require("./batteryRouter")

router.use("/user", userRouter),
    router.use("/device", deviceRouter),
    router.use("/deviceName", deviceNameRouter),
    router.use("/resolution", resolutionRouter),
    router.use("/manufacturer", manufacturerRouter),
    router.use("/country", countryRouter),
    router.use("/os", osRouter),
    router.use("/color", colorRouter),
    router.use("/battery", batteryRouter),
    (module.exports = router)
