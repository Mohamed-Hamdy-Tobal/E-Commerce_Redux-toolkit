import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom"
import { NavBar } from "../Components/Navbar"
import { ToastContainer } from "react-toastify"

export const Root = () => {
    return (
        <>  
            <ToastContainer/>
            <NavBar/>
            <Outlet/>
        </>
    )
}
