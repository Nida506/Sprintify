import CloseIcon from '@mui/icons-material/Close';
import { activeAddCardListId, addNewCardToList } from '@/Redux/BoardsSlice/BoardsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from "@/utils/constants";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../assets/LoadingSpinner.json';
import Lottie from 'lottie-react';
import toast from 'react-hot-toast';


function AddCard({ list}) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [itemText, setItemText] = useState("");
  let activeDashboard = useSelector(store => (store?.boards?.active ? store?.boards?.active:store?.boards?.boards[0] ));
  const [loading, setLoading] = useState(false);
  let addCardToList = async() =>
  {
    try {
      setLoading(true);
      const res = await axios.patch(
        BASE_URL + "/board/addNewCard",
         
        { list_id:list._id, description:itemText } ,
        { withCredentials: true }
      );

      // console.log(res.data);
      let listId = list._id;
      let item = res.data.card;
      dispatch(addNewCardToList({ item, listId }))
      toast.success("Card added successfully!");
      // return navigate("/create");
    } catch (err) {
      console.error(err);
      toast.error("Adding card failed");
    } finally {
      
      setLoading(false);
    }

  }
  
  return (

    <div className="item flex flex-col   rounded cursor-pointer gap-3">
      <textarea
        name=""
        id=""
        cols={55}
        rows={2}
        className="border-1 focus:border-0 outline-none px-2 p-1 w-full border-black border-none  shadow-md item flex justify-between items-center py-2  mt-[7px] hover:border-cyan-400 hover:border-2 bg-white rounded-lg"
        placeholder="Enter a title or paste a link"
        onChange={(e)=>setItemText(e.target.value)}
      ></textarea>
      <div className="flex gap-4 px-1">
       
        {loading ?
          <div className='border bg-gray-400 rounded-md'> <Lottie className='h-[50px]' animationData={LoadingSpinner} /></div> : <button
          onClick={addCardToList}
          className="w-[80px] text-[14px] bg-blue-800 text-white font-semibold px-1 py-[8px] rounded "
        >Add Card </button>}

        
        <button  onClick={() =>dispatch(activeAddCardListId(""))}>
          <CloseIcon className=" text-black" />
        </button>
      </div>
    </div>
  );
}

export default AddCard;
