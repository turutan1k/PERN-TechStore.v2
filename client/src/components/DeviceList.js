import React from "react"
import { observer } from "mobx-react-lite"
import { Context } from "./../index"
import { useContext } from "react"
import { Stack } from "@mui/material"
import DeviceItem from "./DeviceItem"
const DeviceList = observer(() => {
    const { device } = useContext(Context)

    return (
        <Stack
            sx={{
                fontFamily: "Comfortaa",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}
        >
            {device?.devices &&
                device?.devices?.map((device) => (
                    <DeviceItem key={device.id} device={device} />
                ))}
        </Stack>
    )
})

export default DeviceList
