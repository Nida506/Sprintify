import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { BASE_URL } from '@/utils/constants';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addNewListToBoard } from '@/Redux/BoardsSlice/BoardsSlice';
import LoadingSpinner from '../../../assets/LoadingSpinner.json';
import Lottie from 'lottie-react';
import toast from 'react-hot-toast';

function AddList({ setAddListModel }) {
  let [listName, setListName] = useState('');
  let active = useSelector((store) => {
    return store.boards.active;
  });
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  let addListToDashbaord = async () => {
    try {
      setLoading(true);
      let response = await axios.post(
        BASE_URL + '/board/addNewList',
        {
          board_id: active._id,

          listName: listName,
        },
        { withCredentials: true }
      );

      dispatch(addNewListToBoard(response.data.newList));
      setAddListModel(false);
      toast.success("List added Successfully!");
    } catch (error) {
      toast.success("Adding List failed!!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="item flex h-[130px] flex-col w-64 rounded cursor-pointer gap-3 bg-slate-300 p-2">
      <input
        className="border-1 focus:border-0 outline-none px-2 p-1 w-full border-black border-none  shadow-md item flex justify-between items-center py-2  mt-[7px] hover:border-cyan-400 hover:border-2 bg-white rounded-lg"
        placeholder="Enter a title or paste a link"
        onChange={(e) => setListName(e.target.value)}
      ></input>
      <div className="flex gap-4 px-1">
        {loading ? (
          <Lottie animationData={LoadingSpinner} />
        ) : (
          <button
            onClick={addListToDashbaord}
            className="w-[80px] text-[14px] bg-blue-800 text-white font-semibold px-1 py-[8px] rounded "
          >
            Add List{' '}
          </button>
        )}

        <button>
          <CloseIcon
            className=" text-black"
            onClick={() => setAddListModel(false)}
          />
        </button>
      </div>
    </div>
  );
}

export default AddList;
