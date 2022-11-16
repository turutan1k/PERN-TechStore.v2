import { Grid, Box, Button, ImageListItem } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

import { Dialog } from "@mui/material"
import { DialogContent } from "@mui/material"
import { DialogTitle } from "@mui/material"
import { DialogContentText } from "@mui/material"
import { Paper } from "@mui/material"
import { useParams } from "react-router-dom"
import {
    fetchBatteries,
    fetchColors,
    fetchCountries,
    fetchDeviceNames,
    fetchManufacturers,
    fetchOneDevice,
    fetchOses,
    fetchResolutions,
} from "../http/deviceAPI"
import { useState } from "react"
import { useEffect } from "react"
import DevicesOtherIcon from "@mui/icons-material/DevicesOther"
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"
import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation"
import AspectRatioIcon from "@mui/icons-material/AspectRatio"
import BatteryUnknownIcon from "@mui/icons-material/BatteryUnknown"
import FormatPaintIcon from "@mui/icons-material/FormatPaint"
import AndroidIcon from "@mui/icons-material/Android"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import PublicIcon from "@mui/icons-material/Public"
import DateRangeIcon from "@mui/icons-material/DateRange"
import VerifiedIcon from "@mui/icons-material/Verified"
import PaymentsIcon from "@mui/icons-material/Payments"
const DevicePage = () => {
    const { id } = useParams()

    const [device, setDevice] = useState({ info: [] })
    const [deviceNames, setDeviceNames] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    const [batteries, setBatteries] = useState([])
    const [colors, setColors] = useState([])
    const [countries, setCountries] = useState([])
    const [oses, setOses] = useState([])
    const [resolutions, setResolutions] = useState([])

    useEffect(() => {
        fetchOneDevice(id).then((data) => setDevice(data))
        fetchDeviceNames().then((data) => setDeviceNames(data))
        fetchManufacturers().then((data) => setManufacturers(data))
        fetchBatteries().then((data) => setBatteries(data))
        fetchCountries().then((data) => setCountries(data))
        fetchColors().then((data) => setColors(data))
        fetchResolutions().then((data) => setResolutions(data))
        fetchOses().then((data) => setOses(data))
    }, [])

    let deviceNameName =
        deviceNames.length !== 0 && device.deviceNameId
            ? deviceNames.find(
                  (deviceName) => deviceName.id === device.deviceNameId
              )
            : { name: "Отсутствует" }
    let batteryName =
        batteries.length !== 0 && device.batteryId
            ? batteries.find((battery) => battery.id === device.batteryId)
            : { name: "Отсутствует" }

    let countryName =
        countries.length !== 0 && device.countryId
            ? countries.find((country) => country.id === device.countryId)
            : { name: "Отсутствует" }
    let colorName =
        colors.length !== 0 && device.colorId
            ? colors.find((color) => color.id === device.colorId)
            : { name: "Отсутствует" }
    let resolutionName =
        resolutions.length !== 0 && device.resolutionId
            ? resolutions.find(
                  (resolution) => resolution.id === device.resolutionId
              )
            : { name: "Отсутствует" }
    let osName =
        oses.length !== 0 && device.osId
            ? oses.find((os) => os.id === device.osId)
            : { name: "Отсутствует" }
    let manufacturerName =
        manufacturers.length !== 0 && device.manufacturerId
            ? manufacturers.find(
                  (manufacturer) => manufacturer.id === device.manufacturerId
              )
            : { name: "Отсутствует" }

    const navigate = useNavigate()

    return (
        <Dialog
            open
            onClose={() => navigate(-1)}
            aria-labelledby='form-dialog-title'
        >
            <DialogTitle
                id='form-dialog-title'
                sx={{
                    fontFamily: "Comfortaa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    fontSize: "24px",
                    color: "#f7f8f3",
                    background: "#0f3f49",
                }}
            >
                Информация о товаре:
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#0f3f49" }}>
                <Box sx={{ fontFamily: "Comfortaa", flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={3}
                        sx={{
                            dipslay: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "20px",
                        }}
                    >
                        <Grid item xs={5} spacing={1}>
                            <Paper
                                variant='outlined'
                                alt='device.info'
                                sx={{
                                    fontFamily: "Comfortaa",
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: "1",
                                    flexShrink: "1",
                                    flexBasics: "100%",
                                }}
                            >
                                <ImageListItem key={device.img}>
                                    <img
                                        sx={{
                                            fontFamily: "Comfortaa",
                                            maxWidth: "100%",
                                            height: 400,
                                            objectFit: "cover",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            objectPosition: "center",
                                            padding: "2",
                                        }}
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            device.img
                                        }
                                        alt='device.img'
                                    />
                                </ImageListItem>
                            </Paper>
                        </Grid>
                        <Grid
                            item
                            xs={7}
                            sx={{
                                fontFamily: "Comfortaa",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                            }}
                        >
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <DevicesOtherIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {deviceNameName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <PrecisionManufacturingIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {manufacturerName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <PermDeviceInformationIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {device.model}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <AspectRatioIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {resolutionName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <BatteryUnknownIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {batteryName.name + " mAh"}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <FormatPaintIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {colorName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <SettingsSuggestIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {osName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <PublicIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {countryName.name}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <DateRangeIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {device.releaseDate}
                            </DialogContentText>
                            <DialogContentText
                                sx={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <VerifiedIcon
                                    sx={{
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                        fontSize: "20px",
                                    }}
                                />
                                {device.guaranteePeriod + " месяц(ев)"}
                            </DialogContentText>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    container
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Button
                            style={{
                                fontFamily: "Comfortaa",
                                color: "#15505c",
                                fontSize: "20px",
                            }}
                            onClick={() => navigate(-1)}
                        >
                            Приобрести
                        </Button>
                        <Button
                            color='error'
                            onClick={() => navigate(-1)}
                            style={{
                                fontFamily: "Comfortaa",
                                fontSize: "18px",
                            }}
                        >
                            Отмена
                        </Button>
                    </Box>
                    <DialogContentText
                        sx={{
                            fontFamily: "Comfortaa",
                            color: "#f7f8f3",
                            fontSize: "18px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <PaymentsIcon
                            sx={{
                                color: "#f7f8f3",
                                marginRight: "10px",
                                fontSize: "18px",
                            }}
                        />
                        {device.price + " BYN"}
                    </DialogContentText>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
export default DevicePage
