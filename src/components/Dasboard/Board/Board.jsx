import Header from "../Header/Header"
import Lists from "./Lists";
import { useDispatch, useSelector } from "react-redux";

function Board({dashboardData}) {
    let activeDashboard = useSelector(store => (store?.boards?.active ? store?.boards?.active:store?.boards?.boards[0] ));

    return (
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Header activeDashboard={activeDashboard} />
            <Lists activeDashboard={activeDashboard} />
        </div>
    )
}

export default Board
