import Header from '../Header/Header';
import Lists from './Lists';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '@/utils/constants';
import SocketContext from '@/Sockets/socketContext';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { activeBoard } from '@/Redux/BoardsSlice/BoardsSlice';
import LoadingSpinner from '../../../assets/LoadingSpinner.json';
import Lottie from 'lottie-react';
import EmptyChatScreenAnimation from '../../../assets/EmptyChatScreen_Animation.json';

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
    <div
      className={`h-full bg-gradient-to-r `}
      style={{
    background:!activeDashboard?._id? "#ffffff": activeDashboard?._id
      ? activeDashboard.bgColor
      : 'linear-gradient(to right, indigo, purple, pink)',
  }}
    >
      {loading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Lottie animationData={LoadingSpinner} />
        </div>
      ) : !activeDashboard?._id ? (
        <div className="h-full flex justify-center pt-[50px] ">
          <Lottie
            className="h-[300px] w-[400px]"
            isClickToPauseDisabled={true}
            animationData={EmptyChatScreenAnimation}
          />
        </div>
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
