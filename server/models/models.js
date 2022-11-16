const sequelize = require("../db")
const { DataTypes } = require("sequelize")
//ПОЛЬЗОВАТЕЛЬ
const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    passportNumber: { type: DataTypes.INTEGER },
    passportSeries: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.CHAR },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})
//ТЕХНИКА
const Device = sequelize.define("device", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    model: { type: DataTypes.STRING, allowNull: false },
    releaseDate: { type: DataTypes.STRING, allowNull: false },
    guaranteePeriod: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: true },
})
//НАЗВАНИЕ ТЕХНИКИ
const DeviceName = sequelize.define("deviceName", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
})

//ПРОИЗВОДИТЕЛЬ
const Manufacturer = sequelize.define("manufacturer", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})
//Разрешение экрана
const Resolution = sequelize.define("resolution", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})
//Операционная система
const Os = sequelize.define("os", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})
//Цвет
const Color = sequelize.define("color", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})

//СТРАНА
const Country = sequelize.define("country", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})

const Battery = sequelize.define("battery", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
})

//связм техники
DeviceName.hasMany(Device)
Device.belongsTo(DeviceName)

Manufacturer.hasMany(Device)
Device.belongsTo(Manufacturer)

Country.hasMany(Device)
Device.belongsTo(Country)

Resolution.hasMany(Device)
Device.belongsTo(Resolution)

Os.hasMany(Device)
Device.belongsTo(Os)

Color.hasMany(Device)
Device.belongsTo(Color)

Battery.hasMany(Device)
Device.belongsTo(Battery)

module.exports = {
    User,
    Device,
    DeviceName,
    Resolution,
    Manufacturer,
    Country,
    Os,
    Color,
    Battery,
}
