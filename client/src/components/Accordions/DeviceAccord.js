import React from "react"
import { Accordion, Grid, TextField, Button, MenuItem } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography } from "@mui/material"
import { AccordionDetails } from "@mui/material"
import { Context } from "./../../index"
import { useContext, useEffect } from "react"
import { useState } from "react"
import {
    fetchBatteries,
    fetchColors,
    fetchCountries,
    fetchDeviceNames,
    fetchManufacturers,
    fetchOses,
    fetchResolutions,
} from "../../http/deviceAPI"
import { observer } from "mobx-react-lite"
import { createDevice } from "./../../http/deviceAPI"
import { useNavigate } from "react-router-dom"

const DeviceAccord = observer(() => {
    const { device } = useContext(Context)

    const [model, setModel] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [guaranteePeriod, setGuaranteePeriod] = useState("")
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [deviceName, setDeviceName] = useState("")
    const [manufacturer, setManufacturer] = useState("")
    const [country, setCountry] = useState("")
    const [resolution, setResolution] = useState("")
    const [os, setOs] = useState("")
    const [color, setColor] = useState("")
    const [battery, setBattery] = useState("")
    const [info, setInfo] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetchDeviceNames().then((data) => device.setDeviceNames(data))
        fetchManufacturers().then((data) => device.setManufacturers(data))
        fetchCountries().then((data) => device.setCountries(data))
        fetchResolutions().then((data) => device.setResolutions(data))
        fetchOses().then((data) => device.setOses(data))
        fetchColors().then((data) => device.setColors(data))
        fetchBatteries().then((data) => device.setBatteries(data))
    }, [device])

    const addDevice = () => {
        const formData = new FormData()
        formData.append("model", model)
        formData.append("releaseDate", releaseDate)
        formData.append("guaranteePeriod", guaranteePeriod)
        formData.append("price", `${price}`)
        formData.append("img", file)
        formData.append("deviceNameId", device.selectedDeviceName.id)
        formData.append("manufacturerId", device.selectedManufacturer.id)
        formData.append("countryId", device.selectedCountry.id)
        formData.append("resolutionId", device.selectedResolution.id)
        formData.append("osId", device.selectedOs.id)
        formData.append("colorId", device.selectedColor.id)
        formData.append("batteryId", device.selectedBattery.id)

        formData.append("info", JSON.stringify(info))
        createDevice(formData).then((data) => navigate(-1))
    }
    const modelChange = (event) => {
        setModel(event.target.value)
    }

    const releaseDateChange = (event) => {
        setReleaseDate(event.target.value)
    }

    const guaranteePeriodChange = (event) => {
        setGuaranteePeriod(event.target.value)
    }

    const priceChange = (event) => {
        setPrice(Number(event.target.value))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    const deviceNameChange = (event) => {
        setDeviceName(event.target.value)
    }

    const manufacturerChange = (event) => {
        setManufacturer(event.target.value)
    }

    const countryChange = (event) => {
        setCountry(event.target.value)
    }

    const resolutionChange = (event) => {
        setResolution(event.target.value)
    }

    const osChange = (event) => {
        setOs(event.target.value)
    }

    const colorChange = (event) => {
        setColor(event.target.value)
    }

    const batteryChange = (event) => {
        setBattery(event.target.value)
    }

    return (
        <div style={{ margin: "10px" }}>
            <Accordion
                sx={{
                    fontFamily: "Comfortaa",
                    marginTop: 3,
                    background: "#15505c",
                }}
            >
                <AccordionSummary
                    style={{ background: "#15505c", borderRadius: "5px" }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "#f7f8f3" }} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                >
                    <Typography
                        style={{
                            fontFamily: "Comfortaa",
                            color: "#f7f8f3",
                            fontSize: "18px",
                        }}
                    >
                        Устройство
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#0f3f49" }}>
                    <Grid
                        container
                        sx={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Grid
                            item
                            sx={{
                                fontFamily: "Comfortaa",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <TextField
                                onChange={deviceNameChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Тип'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите тип техники, которую хотите добавить'
                            >
                                {device.deviceNames &&
                                    device.deviceNames?.map((deviceName) => (
                                        <MenuItem
                                            key={deviceName.id}
                                            value={deviceName.name}
                                            onClick={() =>
                                                device.setSelectedDeviceName(
                                                    deviceName
                                                )
                                            }
                                        >
                                            {deviceName.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={manufacturerChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Брэнд'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите брэнд, к которому принадлежит выбранный тип техники'
                            >
                                {device.manufacturers &&
                                    device.manufacturers.map((manufacturer) => (
                                        <MenuItem
                                            key={manufacturer.id}
                                            value={manufacturer.name}
                                            onClick={() =>
                                                device.setSelectedManufacturer(
                                                    manufacturer
                                                )
                                            }
                                        >
                                            {manufacturer.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={countryChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Страна производитель'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите страну которая произвела данную технику'
                            >
                                {device.countries &&
                                    device.countries.map((country) => (
                                        <MenuItem
                                            key={country.id}
                                            value={country.name}
                                            onClick={() =>
                                                device.setSelectedCountry(
                                                    country
                                                )
                                            }
                                        >
                                            {country.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={resolutionChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Разрешение устройства'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите страну которая произвела данную технику'
                            >
                                {device.resolutions &&
                                    device.resolutions.map((resolution) => (
                                        <MenuItem
                                            key={resolution.id}
                                            value={resolution.name}
                                            onClick={() =>
                                                device.setSelectedResolution(
                                                    resolution
                                                )
                                            }
                                        >
                                            {resolution.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={osChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Операционная система'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите операционную систему, которая установлена на данную технику'
                            >
                                {device.oses &&
                                    device.oses.map((os) => (
                                        <MenuItem
                                            key={os.id}
                                            value={os.name}
                                            onClick={() =>
                                                device.setSelectedOs(os)
                                            }
                                        >
                                            {os.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={colorChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Цвет техники'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите цвет данной техники'
                            >
                                {device.colors &&
                                    device.colors.map((color) => (
                                        <MenuItem
                                            key={color.id}
                                            value={color.name}
                                            onClick={() =>
                                                device.setSelectedColor(color)
                                            }
                                        >
                                            {color.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                onChange={batteryChange}
                                color='primary'
                                select
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Ёмкость батареи'
                                type='text'
                                fullWidth
                                required
                                helperText='Выберите ёмкость батареи для данной техники'
                            >
                                {device.batteries &&
                                    device.batteries.map((battery) => (
                                        <MenuItem
                                            key={battery.id}
                                            value={battery.name}
                                            onClick={() =>
                                                device.setSelectedBattery(
                                                    battery
                                                )
                                            }
                                        >
                                            {battery.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            <TextField
                                value={model}
                                onChange={modelChange}
                                color='primary'
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Модель'
                                type='text'
                                fullWidth
                                required
                                helperText='Напишите модель устройства, например: Iphone 11 pro'
                            />
                            <TextField
                                value={releaseDate}
                                onChange={releaseDateChange}
                                color='primary'
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Дата релиза'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type='date'
                                fullWidth
                            />
                            <TextField
                                value={guaranteePeriod}
                                onChange={guaranteePeriodChange}
                                color='primary'
                                autoFocus
                                margin='dense'
                                id='outlined-basic'
                                label='Период гарантии'
                                type='text'
                                fullWidth
                                required
                                helperText='Напишите период гарантии'
                            />
                            <TextField
                                value={price}
                                onChange={priceChange}
                                color='primary'
                                margin='dense'
                                id='outlined-basic'
                                label='Цена'
                                type='number'
                                name='numberformat'
                                inputProps={{ min: 0 }}
                                fullWidth
                                required
                                helperText='Установите цену товара'
                            />
                            <TextField
                                onChange={selectFile}
                                color='primary'
                                autoFocus
                                margin='dense'
                                id='formatted-numberformat-input'
                                label='Фотография'
                                type='file'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                required
                                helperText='Выберите фото, которое хотите загрузить'
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            fontFamily: "Comfortaa",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            onClick={addDevice}
                            style={{
                                fontFamily: "Comfortaa",
                                fontSize: "16px",
                                color: "#15505c",
                            }}
                        >
                            Добавить устройство
                        </Button>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
})

export default DeviceAccord
