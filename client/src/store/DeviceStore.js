import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._devices = []
        this._deviceNames = []
        this._manufacturers = []
        this._batteries = []
        this._colors = []
        this._countries = []
        this._oses = []
        this._resolutions = []
        this._selectedDeviceName = {}
        this._selectedManufacturer = {}
        this._selectedBattery = {}
        this._selectedColor = {}
        this._selectedCountry = {}
        this._selectedOs = {}
        this._selectedResolution = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setDevices(devices) {
        this._devices = devices
    }
    setDeviceNames(deviceNames) {
        this._deviceNames = deviceNames
    }
    setManufacturers(manufacturers) {
        this._manufacturers = manufacturers
    }
    setBatteries(batteries) {
        this._batteries = batteries
    }
    setColors(colors) {
        this._colors = colors
    }
    setCountries(countries) {
        this._countries = countries
    }
    setOses(oses) {
        this._oses = oses
    }
    setResolutions(resolutions) {
        this._resolutions = resolutions
    }
    setSelectedDeviceName(deviceName) {
        this.setPage(1)
        this._selectedDeviceName = deviceName
    }
    setSelectedManufacturer(manufacturer) {
        this.setPage(1)
        this._selectedManufacturer = manufacturer
    }
    setSelectedBattery(battery) {
        this._selectedBattery = battery
    }
    setSelectedColor(color) {
        this._selectedColor = color
    }
    setSelectedCountry(country) {
        this._selectedCountry = country
    }
    setSelectedOs(os) {
        this._selectedOs = os
    }
    setSelectedResolution(resolution) {
        this._selectedResolution = resolution
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get devices() {
        return this._devices
    }
    get deviceNames() {
        return this._deviceNames
    }
    get manufacturers() {
        return this._manufacturers
    }
    get batteries() {
        return this._batteries
    }
    get colors() {
        return this._colors
    }
    get countries() {
        return this._countries
    }
    get oses() {
        return this._oses
    }
    get resolutions() {
        return this._resolutions
    }

    get selectedDeviceName() {
        return this._selectedDeviceName
    }
    get selectedManufacturer() {
        return this._selectedManufacturer
    }
    get selectedBattery() {
        return this._selectedBattery
    }
    get selectedColor() {
        return this._selectedColor
    }
    get selectedCountry() {
        return this._selectedCountry
    }
    get selectedOs() {
        return this._selectedOs
    }
    get selectedResolution() {
        return this._selectedResolution
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
