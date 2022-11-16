import React from "react"

import { Accordion, Button, Grid, TextField } from "@mui/material"
import { AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Typography } from "@mui/material"
import { AccordionDetails } from "@mui/material"
import { createColor } from "./../../http/deviceAPI"
import { useState } from "react"
const ColorAccord = () => {
    const [value, setValue] = useState("")

    const addColor = () => {
        createColor({ name: value }).then((data) => {
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
                        Цвет техники
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
                            label='Цвет'
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
                            onClick={addColor}
                            style={{
                                fontFamily: "Comfortaa",
                                fontSize: "16px",
                                color: "#15505c",
                            }}
                        >
                            Добавить
                        </Button>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ColorAccord
