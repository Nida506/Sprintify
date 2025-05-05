import { MoreHorizontalIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { CopyAllRounded, Edit } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
  activeAddCardListId,
  updateBoardListOnDrag,
} from '@/Redux/BoardsSlice/BoardsSlice';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import AddCard from './AddCard';
import CardDetail from './CardDetail';
import { BASE_URL } from '@/utils/constants';
import AddList from './AddList';
import axios from 'axios';

function Lists({ activeDashboard }) {
  console.log(activeDashboard);
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState(null);
  const [addListModel, setAddListModel] = useState(false);
  const activeAddCardListID = useSelector(
    (store) => store?.boards?.activeAddCardListId
  );

  if (!activeDashboard?.toString()) return null;

  const activeShowAddCardSection = (id) => {
    console.log(id);
    dispatch(activeAddCardListId(id));
  };

  const onDragEnd = async (result) => {
    const { source, destination, type } = result;
    if (!destination) return;
  
    if (type === 'group') {
      const newLists = [...activeDashboard.lists];
      const [movedList] = newLists.splice(source.index, 1);
      newLists.splice(destination.index, 0, movedList);
      dispatch(updateBoardListOnDrag(newLists));
      return; // no backend sync needed here (unless you support moving lists)
    }
  
    const newLists = JSON.parse(JSON.stringify(activeDashboard.lists));
  
    const sourceListIndex = newLists.findIndex(
      (list) => list._id.toString() === source.droppableId
    );
    const destinationListIndex = newLists.findIndex(
      (list) => list._id.toString() === destination.droppableId
    );
  
    const sourceList = newLists[sourceListIndex];
    const destinationList = newLists[destinationListIndex];
  
    const [movedCard] = sourceList.cards.splice(source.index, 1);
    destinationList.cards.splice(destination.index, 0, movedCard);
  
    dispatch(updateBoardListOnDrag(newLists)); // ⏱ Optimistic UI update
  
    try {
      const data= await axios.patch(`${BASE_URL}/cards/move`, {
        cardId: movedCard._id,
        sourceListId: source.droppableId,
        destinationListId: destination.droppableId,
        sourceIndex: source.index,
        destinationIndex: destination.index,
      },{withCredentials:true});
      console.log(data);
    } catch (err) {
      console.error('Error moving card:', err);
      // Optionally: rollback the UI state or show a toast error
    }
  };
  

  useEffect(() => {
    dispatch(activeAddCardListId(''));
  }, [activeDashboard]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden'; // Hide background scroll
    } else {
      document.body.style.overflow = 'auto'; // Restore scroll when modal closes
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [selectedCard]);

  return (
    <div className="flex flex-col w-full flex-grow relative h-full ">
      {/* Scrollable Container - This ensures scrollbar appears on right */}
      <div className="flex flex-row  h-full w-full overflow-y-auto scrollbar-thin overflow-x-scroll scrollbar-thumb-gray-400 scrollbar-track-gray-200 ">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="root-container-lists"
            type="group"
            direction="horizontal"
          >
            {
              (provided) => (
              <div
                className="flex gap-3 p-4 w-full"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {activeDashboard?.lists?.map((list, index) => (
                  <Draggable
                    key={list?._id}
                    draggableId={list?._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="bg-[#EFF2F3] flex-shrink-0 h-fit w-64 rounded-2xl overflow-hidden"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <div className="flex flex-col h-full max-h-[400px] p-2">
                          <div className="px-0.5 mt-1 flex justify-between">
                            <span className="font-semibold">{list?.name}</span>
                            <button className="hover:bg-gray-400 p-1 rounded">
                              <MoreHorizontalIcon className="text-[30px] hover:text-black" />
                            </button>
                          </div>

                          <ul className="py-2 flex flex-col gap-2 overflow-y-auto h-full">
                            <Droppable
                              key={list?._id?.toString()}
                              droppableId={list?._id?.toString()}
                              type="CARD"
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                  {list?.cards?.map((card, index) => (
                                    <Draggable
                                      key={card._id}
                                      draggableId={card._id}
                                      index={index}
                                    >
                                      {(provided, snapshot) => (
                                        <div
                                          className={`box-border group z-[1000] border relative shadow-md item flex justify-between items-center py-2 px-1 mt-[7px] hover:border-cyan-400 hover:border-[2px] bg-white rounded-lg ${
                                            snapshot.isDragging
                                              ? 'bg-gray-300 opacity-50 mb-11 transform rotate-6'
                                              : ''
                                          }`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCard({
                                              ...card,
                                              listTitle: list.name,
                                            });
                                          }}
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <p className="text-[14px] px-1 w-full break-words h-fit">
                                            {card.description}
                                          </p>
                                          <div className="hidden group-hover:flex justify-center bg-white items-center hover:bg-slate-200 h-[25px] w-[25px] absolute top-1 right-1 rounded-full px-1 opacity-0 group-hover:opacity-100">
                                            <Edit
                                              fontSize="18"
                                              className="cursor-pointer rounded-full"
                                            />
                                          </div>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>

                            {activeAddCardListID === list._id && (
                              <AddCard list={list} />
                            )}
                          </ul>
                        </div>
                        <div >
                          {(activeAddCardListID !== list._id ) && (
                            <div className="item flex p-[5px] rounded cursor-pointer" onClick={(e)=>e.preventDefault()}>
                              <div
                                className="flex cursor-pointer flex-row w-[90%] gap-1 items-center hover:bg-gray-300 p-1 rounded-lg"
                                onClick={() => {
                                  console.log(list._id);
                                  activeShowAddCardSection(list._id);
                                }
                                }
                              >
                               
                                <AddIcon className="text-[10px] text-gray-500 hover:text-black font-bold" />
                                <span className="text-[13px] text-gray-500 hover:text-black font-bold">
                                  Add Card
                                </span>
                              </div>
                              <CopyAllRounded className="text-[10px] text-gray-500 hover:text-black" />
                            </div>
                          )}
                        </div>
                      </div>
                    )}


                  </Draggable>
                ))}
                  <div>
                  {!addListModel ? (
                  <div
                    id="createNewList"
                    className="bg-white/30 backdrop-blur-mdflex-shrink-0 h-fit w-56  rounded overflow-hidden "
                  >
                    {/* <input type="text" placeholder="Add new List" className="h-[70px]" /> */}

                    <div onClick={()=>setAddListModel(true) } className="cursor-pointer flex flex-row w-60 h-[40px] gap-1 items-center hover:rounded-lg">
                      <AddIcon className="text-[10px] text-gray-500 " />
                      <span className="text-[13px] text-black font-bold ">
                        Add List
                      </span>
                    </div>
                  </div>
                ) : (
                  <AddList setAddListModel={setAddListModel} />
                )}
                  </div>
                {provided.placeholder}
              </div>
            )
            }
          

          </Droppable>
        </DragDropContext>

    
      </div>

      {/* Card Details Modal */}
      {selectedCard && (
        <div className=" ms-5 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]  ">
          <div className=" max-h-[88vh] bg-white rounded-lg shadow-lg relative flex flex-col overflow-hidden">
            <div className="px-5 pt-2 pb-3 flex-1 overflow-y-auto">
              <CardDetail
                selectedCard={selectedCard}
                listTitle={selectedCard.listTitle}
              />
            </div>
            <button
              className="absolute top-4 right-8 text-black font-extrabold px-3 py-2 rounded-full hover:bg-gray-300"
              onClick={() => setSelectedCard(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lists;
