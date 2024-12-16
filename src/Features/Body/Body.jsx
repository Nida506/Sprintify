import { Outlet } from "react-router-dom"
import Navbar from "../../AppComponents/Navbar/Navbar";
function Body() {
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    )
}

export default Body;