import React, { useState, useEffect } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "./../utils/consts"
import { ImageListItem } from "@mui/material"
import { Paper } from "@mui/material"
import { fetchDeviceNames, fetchManufacturers } from "../http/deviceAPI"
import DevicesOtherIcon from "@mui/icons-material/DevicesOther"
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"
import DateRangeIcon from "@mui/icons-material/DateRange"
import VerifiedIcon from "@mui/icons-material/Verified"
import PaymentsIcon from "@mui/icons-material/Payments"

export default function DeviceItem({ device }) {
    const navigate = useNavigate() //динамическое передвижение по страницам

    const [deviceNames, setDeviceNames] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    useEffect(() => {
        fetchDeviceNames().then((data) => setDeviceNames(data))
        fetchManufacturers().then((data) => setManufacturers(data))
    }, [])

    let deviceNameName =
        deviceNames.length !== 0 && device.deviceNameId
            ? deviceNames.find(
                  (deviceName) => deviceName.id === device.deviceNameId
              )
            : { name: "Отсутствует" }
    let manufacturerName =
        manufacturers.length !== 0 && device.manufacturerId
            ? manufacturers.find(
                  (manufacturer) => manufacturer.id === device.manufacturerId
              )
            : { name: "Отсутствует" }

    return (
        <Card
            sx={{
                fontFamily: "Comfortaa",
                minWidth: 345,
                mt: 1,
                m: 2,
                backgroundColor: "#0f3f49",
            }}
        >
            <Paper
                variant='outlined'
                alt='device.img'
                sx={{
                    fontFamily: "Comfortaa",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: "1",
                    flexShrink: "1",
                    flexBasics: "100%",
                    textAlign: "center",
                    p: 2,
                    backgroundColor: "#0f3f49",
                }}
            >
                <ImageListItem key={device.img}>
                    <img
                        style={{
                            maxWidth: "100%",
                            height: 400,
                            objectFit: "cover",
                            alignItems: "center",
                            justifyContent: "center",
                            objectPosition: "center",
                            padding: "2",
                        }}
                        src={process.env.REACT_APP_API_URL + device.img}
                        alt='device.img'
                    />
                </ImageListItem>
            </Paper>
            <CardContent>
                <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    style={{
                        fontFamily: "Comfortaa",
                        fontSize: "24px",
                        color: "#f7f8f3",
                    }}
                >
                    {device.model}
                </Typography>
                <Typography
                    variant='body2'
                    color='text.primary'
                    style={{
                        fontFamily: "Comfortaa",
                        fontSize: "14px",
                        color: "#f7f8f3",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <DevicesOtherIcon
                        sx={{
                            color: "#f7f8f3",
                            marginRight: "10px",
                            fontSize: "14px",
                        }}
                    />
                    {deviceNameName.name}
                </Typography>
                <Typography
                    variant='body2'
                    color='text.primary'
                    style={{
                        fontFamily: "Comfortaa",
                        fontSize: "14px",
                        color: "#f7f8f3",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <PrecisionManufacturingIcon
                        sx={{
                            color: "#f7f8f3",
                            marginRight: "10px",
                            fontSize: "14px",
                        }}
                    />
                    {manufacturerName.name}
                </Typography>
                <Typography
                    variant='body2'
                    color='text.primary'
                    style={{
                        fontFamily: "Comfortaa",
                        fontSize: "14px",
                        color: "#f7f8f3",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <VerifiedIcon
                        sx={{
                            color: "#f7f8f3",
                            marginRight: "10px",
                            fontSize: "14px",
                        }}
                    />
                    {device.guaranteePeriod + " месяц(ев)"}
                </Typography>
                <Typography
                    variant='body2'
                    color='text.primary'
                    style={{
                        fontFamily: "Comfortaa",
                        fontSize: "14px",
                        color: "#f7f8f3",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <DateRangeIcon
                        sx={{
                            color: "#f7f8f3",
                            marginRight: "10px",
                            fontSize: "14px",
                        }}
                    />
                    {device.releaseDate}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    fontFamily: "Comfortaa",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    size='small'
                    onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
                    style={{
                        fontFamily: "Comfortaa",
                        fontSize: "16px",
                        color: "#15505c",
                    }}
                >
                    Информация
                </Button>
                <Typography
                    size='small'
                    style={{
                        fontFamily: "Comfortaa",
                        fontSize: "16px",
                        color: "#f7f8f3",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <PaymentsIcon
                        sx={{
                            color: "#f7f8f3",
                            marginRight: "10px",
                            fontSize: "16px",
                        }}
                    />
                    {device.price + " BYN"}
                </Typography>
            </CardActions>
        </Card>
    )
}
