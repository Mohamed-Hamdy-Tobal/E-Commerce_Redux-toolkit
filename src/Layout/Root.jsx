import { Outlet } from "react-router-dom"
import { NavBar } from "../Components/Navbar"

export const Root = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}
