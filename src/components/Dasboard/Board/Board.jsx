import Header from "../Header/Header"
import Lists from "./Lists";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "@/utils/constants";

function Board({dashboardData}) {
    let activeDashboard = useSelector(store => (store?.boards?.active ? store?.boards?.active:{} ));
    const currentUser = useSelector((store) => store?.user); 
    return (
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
           {
            (!activeDashboard.toString())? 
            <div>
                     
            </div>:
           <>
           <Header activeDashboard={activeDashboard} currentUser={currentUser}/>
            <Lists activeDashboard={activeDashboard} />
            </>}
        </div>
    )
}

export default Board
