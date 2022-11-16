import { Button, Grid, Dialog, DialogContent } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

import DeviceNameAccord from "../components/Accordions/DeviceNameAccord"
import DeviceAccord from "../components/Accordions/DeviceAccord"
import ManufacturerAccord from "../components/Accordions/ManufacturerAccord"
import BatteryAccord from "../components/Accordions/BatteryAccord"
import ColorAccord from "../components/Accordions/ColorAccord"
import CountryAccord from "../components/Accordions/CountryAccord"
import OsAccord from "../components/Accordions/OsAccord"
import ResolutionAccord from "../components/Accordions/Resolution"

const Admin = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Dialog open onClose={() => navigate(-1)}>
                <DialogContent sx={{ backgroundColor: "#0f3f49" }}>
                    <Grid
                        container
                        sx={{
                            fontFamily: "Comfortaa",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Grid item>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "10px",
                                    fontSize: "24px",
                                    color: "#f7f8f3",
                                }}
                            >
                                Добавить:
                            </div>
                            <DeviceAccord />
                            <DeviceNameAccord />
                            <ManufacturerAccord />
                            <BatteryAccord />
                            <ColorAccord />
                            <CountryAccord />
                            <OsAccord />
                            <ResolutionAccord />
                        </Grid>

                        <Grid
                            item
                            sx={{
                                fontFamily: "Comfortaa",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                marginTop: 3,
                            }}
                        >
                            <Button
                                color='error'
                                onClick={() => navigate(-1)}
                                style={{
                                    fontFamily: "Comfortaa",
                                    fontSize: "18px",
                                }}
                            >
                                Выйти
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Admin
