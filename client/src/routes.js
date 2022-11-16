import Shop from "./pages/Shop"
import DevicePage from "./components/DevicePage"
import {
    ADMIN_ROUTE,
    SHOP_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    DEVICE_ROUTE,
} from "./utils/consts"
import Admin from "./pages/Admin"
import Auth from "./components/popups/Auth"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: DEVICE_ROUTE + "/:id",
        Component: DevicePage,
    },
]
