import * as React from "react"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

import { observer } from "mobx-react-lite"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Context } from "./../../index"

import { LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts"
import { ADMIN_ROUTE } from "./../../utils/consts"
import BiotechIcon from "@mui/icons-material/Biotech"

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem("token")
    }

    return (
        <div
            style={{
                display: "flex",
            }}
        >
            <Box
                sx={{
                    padding: "0px",
                    display: "flex",
                    fontFamily: "Comfortaa",
                    flexGrow: 1,
                }}
            >
                <AppBar
                    position='static'
                    sx={{
                        fontFamily: "Comfortaa",
                        background: "#15505c",
                    }}
                >
                    <Toolbar>
                        <div style={{ display: "flex" }}>
                            {(changeValue) => (
                                <Button
                                    startIcon={<MenuIcon />}
                                    size='large'
                                    edge='start'
                                    color='inherit'
                                    aria-label='menu'
                                    style={{
                                        fontFamily: "Comfortaa",
                                        mr: 2,
                                    }}
                                />
                            )}
                        </div>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{
                                fontFamily: "Comfortaa",
                                flexGrow: 1,
                            }}
                        >
                            <NavLink
                                style={{
                                    fontFamily: "Comfortaa",
                                    fontSize: "30px",
                                    color: "#f7f8f3",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                to={SHOP_ROUTE}
                            >
                                <BiotechIcon
                                    sx={{
                                        fontSize: "30px",
                                        color: "#f7f8f3",
                                        marginRight: "10px",
                                    }}
                                />
                                TechStore
                            </NavLink>
                        </Typography>
                        {user.isAuth ? (
                            <>
                                <Button
                                    variant='outline-light'
                                    onClick={() => navigate(ADMIN_ROUTE)}
                                    style={{
                                        fontFamily: "Comfortaa",
                                        color: "#f7f8f3",
                                        fontSize: "18px",
                                    }}
                                >
                                    Добавить пост
                                </Button>
                                <Button
                                    variant='outline-light'
                                    onClick={() => logOut()}
                                    style={{
                                        fontFamily: "Comfortaa",
                                        color: "#f7f8f3",
                                        fontSize: "18px",
                                    }}
                                >
                                    Выйти
                                </Button>
                            </>
                        ) : (
                            <Button
                                variant={"outline-light"}
                                onClick={() => navigate(LOGIN_ROUTE)}
                                style={{
                                    fontFamily: "Comfortaa",
                                    color: "#f7f8f3",
                                    fontSize: "18px",
                                }}
                            >
                                Авторизация
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
})

export default NavBar
