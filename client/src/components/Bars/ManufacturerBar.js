import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../../index"
import Box from "@mui/material/Box"
import Tabs, { tabsClasses } from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"

const ManufacturerBar = () => {
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
                display: "flex",
                alignItems: "center",
                padding: "0px 16px",
            }}
        >
            <PrecisionManufacturingIcon
                sx={{
                    color: "#f7f8f3",
                    marginRight: "10px",
                    fontSize: "20px",
                }}
            />
            <div
                style={{
                    color: "#f7f8f3",
                    marginRight: "10px",
                    fontSize: "20px",
                }}
            >
                :
            </div>
            <Tabs
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons
                aria-label='visible arrows tabs example'
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        "&.Mui-disabled": { opacity: 0.3 },
                    },
                }}
            >
                {device?.manufacturers &&
                    device?.manufacturers?.map((manufacturer) => (
                        <Tab
                            sx={{
                                fontFamily: "Comfortaa",
                                fontSize: "16px",
                                backgroundColor: "#15505c",
                                color: "#f7f8f3",
                            }}
                            key={manufacturer.id}
                            primary={device}
                            label={manufacturer.name}
                            selected={
                                manufacturer.id ===
                                device.setSelectedManufacturer
                            }
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                device.setSelectedManufacturer(manufacturer)
                            }
                        />
                    ))}
            </Tabs>
        </Box>
    )
}

export default ManufacturerBar
