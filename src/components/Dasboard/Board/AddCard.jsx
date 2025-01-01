import CloseIcon from '@mui/icons-material/Close';
import { activeAddCardListId, addNewCardToList } from '@/Redux/BoardsSlice/BoardsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';


function AddCard({ list}) {
  let dispatch = useDispatch();
  let [itemText, setItemText] = useState("");
  let activeDashboard = useSelector(store => (store?.boards?.active ? store?.boards?.active:store?.boards?.boards[0] ));

  let addCardToList = () =>
  {
    let listId = list.id;
    let item = itemText;
     dispatch(addNewCardToList({item, listId}))
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
        <button
          onClick={addCardToList}
          className="w-[80px] text-[14px] bg-blue-800 text-white font-semibold px-1 py-[8px] rounded "
        >
          Add Card
        </button>
        <button  onClick={() =>dispatch(activeAddCardListId(""))}>
          <CloseIcon className=" text-black" />
        </button>
      </div>
    </div>
  );
}

export default AddCard;
