import React from "react"
import { ListItem } from "@mui/material"
import { ListItemText } from "@mui/material"

const DeviceName = (props) => {
    const { device, onClick, className, isSelected } = props
    const { name } = device
    return (
        <div>
            <ListItem
                button
                className={className}
                selected={isSelected}
                style={{
                    fontFamily: "Comfortaa",
                    fontSize: "20px",
                    cursor: "pointer",
                }}
                onClick={onClick}
                sx={{
                    cursor: "pointer",
                    color: "#f7f8f3",
                }}
            >
                <ListItemText
                    primary={name}
                    style={{
                        fontFamily: "Comfortaa",
                        fontSize: "20px",
                        color: "#f7f8f3",
                    }}
                />
            </ListItem>
        </div>
    )
}

export default DeviceName
