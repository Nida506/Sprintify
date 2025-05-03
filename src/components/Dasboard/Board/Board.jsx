import Header from "../Header/Header"
import Lists from "./Lists";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "@/utils/constants";
import SocketContext from "@/Sockets/socketContext";
import { useContext } from "react";
import { useEffect } from "react";

function Board({dashboardData}) {
    let activeDashboard = useSelector(store => (store?.boards?.active ? store?.boards?.active:{} ));
 
    const currentUser = useSelector((store) => store?.user); 

    let { socket, connectSocket, disconnectSocket, userId } = useContext(SocketContext);
    let user  = useSelector(store => {
        return store.user
    });
    useEffect(() => {
         if( !socket?.connected)
            connectSocket();
        socket?.emit("joinCollaboration", activeDashboard._id, userId);
        () =>
        {
            if (socket) disconnectSocket();
        }
    }, [activeDashboard]);
    

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
