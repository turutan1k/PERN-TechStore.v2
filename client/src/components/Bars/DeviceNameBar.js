import React, { useState } from "react"
import { Box, Tabs, Tab, tabsClasses } from "@mui/material"
import { ListSubheader } from "@mui/material"
import { Context } from "../../index"
import { useContext } from "react"
import DevicesOtherIcon from "@mui/icons-material/DevicesOther"

const DeviceNameBar = () => {
    const { device } = useContext(Context)
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box
            sx={{
                flexGrow: 1,
                width: "100%",
            }}
        >
            <ListSubheader
                sx={{
                    fontFamily: "Comfortaa",
                    fontSize: "20px",
                    display: "flex",
                    backgroundColor: "#15505c",
                    color: "#f7f8f3",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                component='div'
                id='nested-list-subheader'
            >
                <DevicesOtherIcon
                    sx={{
                        color: "#f7f8f3",
                        marginRight: "10px",
                        fontSize: "20px",
                    }}
                />
                Название техники
            </ListSubheader>
            <Tabs
                orientation='vertical'
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons
                aria-label='Vertical tabs example'
            >
                {device?.deviceNames &&
                    device?.deviceNames?.map((deviceName) => (
                        <Tab
                            sx={{
                                fontFamily: "Comfortaa",
                                fontSize: "16px",
                                backgroundColor: "#15505c",
                                color: "#f7f8f3",
                            }}
                            key={deviceName.id}
                            primary={device}
                            label={deviceName.name}
                            selected={
                                deviceName.id === device.setSelectedDeviceName
                            }
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                device.setSelectedDeviceName(deviceName)
                            }
                        />
                    ))}
            </Tabs>
        </Box>
    )
}

export default DeviceNameBar
