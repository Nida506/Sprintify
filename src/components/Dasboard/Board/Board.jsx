import Header from "../Header/Header"
import Lists from "./Lists";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "@/utils/constants";
import SocketContext from "@/Sockets/socketContext";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { activeBoard } from "@/Redux/BoardsSlice/BoardsSlice";

function Board({ dashboardData }) {
    let activeDashboard = useSelector(store => (store?.boards?.active ? store?.boards?.active:{} ));
    let dispatch = useDispatch();
    let fetchBoard = async () =>
    {
        console.log(activeDashboard);
        if (activeDashboard?._id) return;
        try {
            let response = await axios.get(BASE_URL + "/" + activeDashboard, { withCredentials: true });
            console.log(response.data.data.board);
            dispatch(activeBoard(response.data.data.board));
        } catch (error)
        {
            console.log(error);
        }
    }
 
    const currentUser = useSelector((store) => store?.user); 

    let { socket, connectSocket, disconnectSocket, userId } = useContext(SocketContext);
    let user  = useSelector(store => {
        return store.user
    });

    useEffect(() => {
        fetchBoard();

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
