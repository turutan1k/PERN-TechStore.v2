import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Dialog, Grid } from "@mui/material"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
import { DialogTitle, DialogContentText } from "@mui/material"
import { DialogContent } from "@mui/material"
import { LOGIN_ROUTE } from "../../utils/consts"
import { registration } from "./../../http/userAPI"
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { SHOP_ROUTE } from "../../utils/consts"
import { useContext } from "react"
import { Context } from "../../index"

const SignUp = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const click = async (data) => {
        try {
            data = await registration(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Dialog open onClose={() => navigate(-1)}>
            <DialogTitle
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Comfortaa",
                    fontSize: "30px",
                    color: "#f7f8f3",
                    backgroundColor: "#0f3f49",
                }}
            >
                Регистрация
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#0f3f49" }}>
                <DialogContentText
                    sx={{
                        fontFamily: "Comfortaa",
                        color: "#f7f8f3",
                        backgroundColor: "#0f3f49",
                    }}
                >
                    Есть аккаунт?
                    <NavLink
                        to={LOGIN_ROUTE}
                        style={{
                            fontFamily: "Comfortaa",
                            textDecoration: "none",
                            color: "#15505c",
                            backgroundColor: "#0f3f49",
                        }}
                    >
                        {"\u00A0"}Вход
                    </NavLink>
                </DialogContentText>
                <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Email Adress'
                    type='email'
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Grid
                    sx={{
                        fontFamily: "Comfortaa",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        onClick={click}
                        style={{
                            fontFamily: "Comfortaa",
                            color: "#f7f8f3",
                            fontSize: "18px",
                        }}
                    >
                        Зарегестрироваться
                    </Button>
                    <Button
                        color='error'
                        onClick={() => navigate(-1)}
                        style={{
                            fontFamily: "Comfortaa",
                            fontSize: "18px",
                        }}
                    >
                        Отмена
                    </Button>
                </Grid>
            </DialogContent>
        </Dialog>
    )
})

export default SignUp
