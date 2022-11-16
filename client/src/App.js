import { React, useContext, useEffect, useState } from "react"
import AppRouter from "./components/AppRouter"
import { observer } from "mobx-react-lite"
import { Context } from "./index"
import { check } from "./http/userAPI"
import { CircularProgress, Box } from "@mui/material"
import Navbar from "./components/Bars/NavBar"
import {
    fetchManufacturers,
    fetchDeviceNames,
    fetchDevices,
    fetchBatteries,
    fetchColors,
    fetchCountries,
    fetchOses,
    fetchResolutions,
} from "./http/deviceAPI"

const App = observer(() => {
    const { user, device } = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            check()
                .then((data) => {
                    user.setUser(true)
                    user.setIsAuth(true)
                    fetchDevices(null, null, 1, 10).then((data) => {
                        device.setDevices(data.rows)
                        device.setTotalCount(data.count)
                    })
                    fetchDeviceNames().then((data) =>
                        device.setDeviceNames(data)
                    )
                    fetchManufacturers().then((data) =>
                        device.setManufacturers(data)
                    )
                    fetchBatteries().then((data) => device.setBatteries(data))
                    fetchColors().then((data) => device.setColors(data))
                    fetchCountries().then((data) => device.setCountries(data))
                    fetchOses().then((data) => device.setOses(data))
                    fetchResolutions().then((data) =>
                        device.setResolutions(data)
                    )
                })
                .finally(() => setLoading(false))
        }, 1000)
    }, [user, device])
    useEffect(() => {
        fetchDevices(
            device.selectedDeviceName.id,
            device.selectedManufacturer.id,
            device.page,
            10
        ).then((data) => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.selectedDeviceName, device.selectedManufacturer, device.page])
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 0 : prevProgress + 20
            )
        }, 100)
        return () => {
            clearInterval(timer)
        }
    })

    if (loading) {
        return (
            <Box sx={{ position: "absolute", left: "50%", top: "50%" }}>
                <CircularProgress
                    variant='determinate'
                    value={progress}
                    sx={{ color: "#f7f8f3" }}
                />
            </Box>
        )
    }

    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    )
})

export default App
