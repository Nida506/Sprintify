import MainFooter from "@/components/MainFooter/MainFooter";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom"


function Body() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
           
        </div>
    )
}

export default Body;