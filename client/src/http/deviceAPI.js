import { $authHost, $host } from "./index"

export const createDevice = async (device) => {
    const { data } = await $authHost.post("api/device", device)
    return data
}

export const fetchDevices = async (
    deviceNameId,
    manufacturerId,
    page,
    limit = 5
) => {
    const { data } = await $host.get("api/device", {
        params: {
            deviceNameId,
            manufacturerId,
            page,
            limit,
        },
    })
    return data
}

export const createDeviceName = async (deviceName) => {
    const { data } = await $authHost.post("api/deviceName", deviceName)
    return data
}

export const fetchDeviceNames = async () => {
    const { data } = await $host.get("api/deviceName")
    return data
}

export const createManufacturer = async (manufacturer) => {
    const { data } = await $authHost.post("api/manufacturer", manufacturer)
    return data
}

export const fetchManufacturers = async () => {
    const { data } = await $host.get("api/manufacturer")
    return data
}

export const createBattery = async (battery) => {
    const { data } = await $authHost.post("api/battery", battery)
    return data
}

export const fetchBatteries = async () => {
    const { data } = await $host.get("api/battery")
    return data
}

export const createColor = async (color) => {
    const { data } = await $authHost.post("api/color", color)
    return data
}

export const fetchColors = async () => {
    const { data } = await $host.get("api/color")
    return data
}

export const createCountry = async (country) => {
    const { data } = await $authHost.post("api/country", country)
    return data
}

export const fetchCountries = async () => {
    const { data } = await $host.get("api/country")
    return data
}

export const createOs = async (os) => {
    const { data } = await $authHost.post("api/os", os)
    return data
}

export const fetchOses = async () => {
    const { data } = await $host.get("api/os")
    return data
}

export const createResolution = async (resolution) => {
    const { data } = await $authHost.post("api/resolution", resolution)
    return data
}

export const fetchResolutions = async () => {
    const { data } = await $host.get("api/resolution")
    return data
}

export const fetchOneDevice = async (id) => {
    const { data } = await $authHost.get("api/device/" + id)
    return data
}
