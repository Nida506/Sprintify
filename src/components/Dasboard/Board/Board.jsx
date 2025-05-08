import Header from '../Header/Header';
import Lists from './Lists';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '@/utils/constants';
import SocketContext from '@/Sockets/socketContext';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { activeBoard } from '@/Redux/BoardsSlice/BoardsSlice';
import Lottie from 'lottie-react';
import LoadingSpinner from '../../../assets/LoadingSpinner.json';

function Board({ dashboardData }) {
  let activeDashboard = useSelector((store) =>
    store?.boards?.active ? store?.boards?.active : {}
  );
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  let fetchBoard = async () => {
    if (activeDashboard?._id) return;
    try {
      setLoading(true);
      let response = await axios.get(BASE_URL + '/' + activeDashboard, {
        withCredentials: true,
      });
      dispatch(activeBoard(response.data.data.board));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const currentUser = useSelector((store) => store?.user);

  let { socket, connectSocket, disconnectSocket, userId } =
    useContext(SocketContext);
  let user = useSelector((store) => {
    return store.user;
  });

  useEffect(() => {
    fetchBoard();

    if (!socket || !socket?.connected) connectSocket();

    socket?.emit('joinCollaboration', activeDashboard._id, userId);
    () => {
      if (socket) disconnectSocket();
    };
  }, [activeDashboard]);


  return (
    <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Lottie animationData={LoadingSpinner} />
        </div>
      ) : !activeDashboard ? (
        <div></div>
      ) : (
        <>
          <Header activeDashboard={activeDashboard} currentUser={currentUser} />
          <Lists activeDashboard={activeDashboard} />
        </>
      )}
    </div>
  );
}

export default Board;
