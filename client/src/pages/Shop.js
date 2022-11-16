import { Grid } from "@mui/material"
import React from "react"
import DeviceList from "../components/DeviceList"
import ManufacturerBar from "../components/Bars/ManufacturerBar"
import DeviceNameBar from "./../components/Bars/DeviceNameBar"
import { observer } from "mobx-react-lite"
import Pages from "../components/Pages"

const Shop = observer(() => {
    return (
        <div>
            <Grid container direction='row' paddingTop={2} mt={0}>
                <Grid item xs={2}>
                    <DeviceNameBar />
                </Grid>
                <Grid item xs={10}>
                    <ManufacturerBar />
                    <DeviceList />
                    <Pages />
                </Grid>
            </Grid>
        </div>
    )
})

export default Shop
