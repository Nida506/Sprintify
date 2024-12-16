import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
function Body() {
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    )
}

export default Body
