import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, Grid } from "@mui/material"
import { Dialog } from "@mui/material"
import { DialogContent } from "@mui/material"
import { DialogTitle } from "@mui/material"
import { DialogContentText } from "@mui/material"
import { TextField } from "@mui/material"
import { NavLink } from "react-router-dom"
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "../../utils/consts"
import { login } from "../../http/userAPI"
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../../index"

const SignIn = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const click = async (data) => {
        try {
            data = await login(email, password)
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
                Авторизация
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "#0f3f49" }}>
                <DialogContentText
                    sx={{
                        fontFamily: "Comfortaa",
                        color: "#f7f8f3",
                        backgroundColor: "#0f3f49",
                    }}
                >
                    Нет аккаунта?
                    <NavLink
                        to={REGISTRATION_ROUTE}
                        style={{
                            fontFamily: "Comfortaa",
                            textDecoration: "none",
                            color: "#15505c",
                            backgroundColor: "#0f3f49",
                        }}
                    >
                        {"\u00A0"}Регистрация
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
                    color='primary'
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
                        Войти
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

export default SignIn
