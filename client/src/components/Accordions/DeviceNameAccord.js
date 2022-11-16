import React from "react"

import { Accordion, Button, Grid, TextField } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography } from "@mui/material"
import { AccordionDetails } from "@mui/material"
import { useState } from "react"
import { createDeviceName } from "../../http/deviceAPI"

const DeviceNameAccord = () => {
    const [value, setValue] = useState("")

    const addDeviceName = () => {
        createDeviceName({ name: value }).then((data) => {
            setValue("")
        })
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
                        Тип устройства
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#0f3f49" }}>
                    <Grid
                        item
                        sx={{
                            fontFamily: "Comfortaa",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TextField
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            color='primary'
                            autoFocus
                            margin='dense'
                            id='outlined-basic'
                            label='Название типа'
                            type='name'
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        container
                        sx={{
                            fontFamily: "Comfortaa",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button
                            style={{
                                fontFamily: "Comfortaa",
                                fontSize: "16px",
                                color: "#15505c",
                            }}
                            onClick={addDeviceName}
                        >
                            Добавить
                        </Button>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default DeviceNameAccord
