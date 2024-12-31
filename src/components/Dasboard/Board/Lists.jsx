import { MoreHorizontalIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { CopyAllRounded, Edit } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { activeAddCardListId, updateBoardListOnDrag } from '@/Redux/BoardsSlice/BoardsSlice';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// INTERNAL IMPORTS
import AddCard from './AddCard';

function Lists({ activeDashboard }) {
  const dispatch = useDispatch();
  const [showEditButton, setShowEdit] = useState(false);

  const activeAddCardListID = useSelector(
    (store) => store.boards.activeAddCardListId
  );

  if (!activeDashboard?.toString()) return null;

  const activeShowAddCardSection = (id) => {
    dispatch(activeAddCardListId(id));
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Exit if dropped outside any list or card
    if (!destination) return;

    // Handle dragging cards
    if (source.droppableId !== destination.droppableId) {
      // Move card between lists
      const newLists = JSON.parse(JSON.stringify(activeDashboard.lists));

      const sourceListIndex = newLists.findIndex(
        (list) => list.id.toString() === source.droppableId
      );
      const destinationListIndex = newLists.findIndex(
        (list) => list.id.toString() === destination.droppableId
      );

      const sourceList = newLists[sourceListIndex];
      const destinationList = newLists[destinationListIndex];

      // Remove the card from the source list
      const [movedCard] = sourceList.items.splice(source.index, 1);

      // Add the card to the destination list
      destinationList.items.splice(destination.index, 0, movedCard);

      dispatch(updateBoardListOnDrag(newLists));
    } else {
      // Handle dragging lists
      const newLists = [...activeDashboard.lists];
      const [movedList] = newLists.splice(source.index, 1);  // Remove the list from its original position
      newLists.splice(destination.index, 0, movedList);  // Add it to the new position

      // Dispatch the updated lists order to Redux
      dispatch(updateBoardListOnDrag(newLists));
    }
  };

  useEffect(() => {
    dispatch(activeAddCardListId(''));
  }, [activeDashboard]);

  return (
    <div className="flex flex-col w-full flex-grow relative h-full">
      <div className="flex mb-1 pb-2 px-[20px] pt-3 overflow-x-auto overflow-y-auto h-[90%] w-full">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="root-container-lists" type="group" direction="horizontal">
            {(provided) => (     //this arrow function provide us the information  of our current state
              <div
                className="flex gap-3"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {activeDashboard?.lists?.map((list, index) => (
                  <Draggable key={list.id.toString()} draggableId={list.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        className="flex flex-col gap-2 w-60 h-fit rounded-md p-2 bg-[#EFF2F3] flex-shrink-0"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      
                      >
                        <div className="px-0.5 flex justify-between">
                          <span className="font-semibold">{list?.title}</span>
                          <button className="hover:bg-gray-400 p-1 rounded">
                            <MoreHorizontalIcon className="text-[30px] hover:text-black" />
                          </button>
                        </div>

                        {/* Render cards */}
                        <ul className="flex flex-col gap-2">
                          <Droppable key={list.id.toString()} droppableId={list.id.toString()} type="CARD">
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                              >
                                {list?.items?.map((card, index) => (
                                  <Draggable key={card.id.toString()} draggableId={card.id.toString()} index={index}>
                                    {(provided, snapshot) => (
                                      <div
                                        className={`group border shadow-md item flex justify-between items-center py-2 px-1 mt-[7px] hover:border-cyan-400 hover:border-2 bg-white rounded-lg ${
                                          snapshot.isDragging ? 'bg-gray-300 opacity-50 mb-11 transform rotate-6' : ''
                                        }`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <p className="text-[14px] px-1">{card.content}</p>
                                        {/* Ensure the Edit icon is a child of the group */}
                                        <div className='hidden group-hover:block'>
                                          <Edit fontSize="13" className="cursor-pointer" />
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </ul>

                        {/* Add Card Section */}
                        {activeAddCardListID === list.id && <AddCard list={list} />}
                        {activeAddCardListID !== list.id && (
                          <li className="item flex p-[5px] rounded cursor-pointer">
                            <div
                              className="flex flex-row w-[90%] gap-1 items-center hover:bg-gray-300 p-1 rounded-lg"
                              onClick={() => activeShowAddCardSection(list.id)}
                            >
                              <AddIcon className="text-[10px] text-gray-500 hover:text-black font-bold" />
                              <span className="text-[13px] text-gray-500 hover:text-black font-bold font-Roboto">
                                Add Card
                              </span>
                            </div>
                            <CopyAllRounded className="text-[10px] text-gray-500 hover:text-black" />
                          </li>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default Lists;
