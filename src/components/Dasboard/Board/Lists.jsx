import { MoreHorizontalIcon } from "lucide-react";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { CopyAllRounded, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  activeAddCardListId,
  updateBoardListOnDrag,
} from "@/Redux/BoardsSlice/BoardsSlice";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddCard from "./AddCard";
import CardDetail from "./CardDetail";
import { BASE_URL } from "@/utils/constants";

function Lists({ activeDashboard }) {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState(null);
  const activeAddCardListID = useSelector(
    (store) => store?.boards?.activeAddCardListId
  );

  if (!activeDashboard?.toString()) return null;

  const activeShowAddCardSection = (id) => {
    dispatch(activeAddCardListId(id));
  };

  const onDragEnd = (result) => {
    const { source, destination, type } = result;
    if (!destination) return;

    if (type === "group") {
      const newLists = [...activeDashboard.lists];
      const [movedList] = newLists.splice(source.index, 1);
      newLists.splice(destination.index, 0, movedList);
      dispatch(updateBoardListOnDrag(newLists));
    } else if (type === "CARD") {
      if (source.droppableId !== destination.droppableId) {
        const newLists = JSON.parse(JSON.stringify(activeDashboard.lists));
        const sourceListIndex = newLists.findIndex(
          (list) => list.id.toString() === source.droppableId
        );
        const destinationListIndex = newLists.findIndex(
          (list) => list.id.toString() === destination.droppableId
        );

        const sourceList = newLists[sourceListIndex];
        const destinationList = newLists[destinationListIndex];

        const [movedCard] = sourceList.items.splice(source.index, 1);
        destinationList.items.splice(destination.index, 0, movedCard);

        dispatch(updateBoardListOnDrag(newLists));
      } else {
        const newLists = JSON.parse(JSON.stringify(activeDashboard.lists));
        const listIndex = newLists.findIndex(
          (list) => list.id.toString() === source.droppableId
        );
        const list = newLists[listIndex];

        const [movedCard] = list.items.splice(source.index, 1);
        list.items.splice(destination.index, 0, movedCard);
        dispatch(updateBoardListOnDrag(newLists));
      }
    }
  };

  useEffect(() => {
    dispatch(activeAddCardListId(""));
  }, [activeDashboard]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden"; // Hide background scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll when modal closes
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [selectedCard]);


  

  

  return (
    <div className="flex flex-col w-full flex-grow relative h-full overflow-hidden">
      {/* Scrollable Container - This ensures scrollbar appears on right */}
      <div className="flex flex-col h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="root-container-lists"
            type="group"
            direction="horizontal"
          >
            {(provided) => (
              <div
                className="flex gap-3 p-4 w-full"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {activeDashboard?.lists?.map((list, index) => (
                  <Draggable
                    key={list.id.toString()}
                    draggableId={list.id.toString()}
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
                            <span className="font-semibold">{list?.title}</span>
                            <button className="hover:bg-gray-400 p-1 rounded">
                              <MoreHorizontalIcon className="text-[30px] hover:text-black" />
                            </button>
                          </div>

                          <ul className="py-2 flex flex-col gap-2 overflow-y-auto h-full">
                            <Droppable
                              key={list.id.toString()}
                              droppableId={list.id.toString()}
                              type="CARD"
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                  {list?.items?.map((card, index) => (
                                    <Draggable
                                      key={card.id.toString()}
                                      draggableId={card.id.toString()}
                                      index={index}
                                    >
                                      {(provided, snapshot) => (
                                        <div
                                          className={`box-border group z-[1000] border relative shadow-md item flex justify-between items-center py-2 px-1 mt-[7px] hover:border-cyan-400 hover:border-[2px] bg-white rounded-lg ${
                                            snapshot.isDragging
                                              ? "bg-gray-300 opacity-50 mb-11 transform rotate-6"
                                              : ""
                                          }`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCard({
                                              ...card,
                                              listTitle: list.title,
                                            });
                                          }}
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <p className="text-[14px] px-1 w-full break-words h-fit">
                                            {card.content}
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

                            {activeAddCardListID === list.id && (
                              <AddCard list={list} />
                            )}
                          </ul>
                        </div>
                        <div>
                          {activeAddCardListID !== list.id && (
                            <li className="item flex p-[5px] rounded cursor-pointer">
                              <div
                                className="flex flex-row w-[90%] gap-1 items-center hover:bg-gray-300 p-1 rounded-lg"
                                onClick={() =>
                                  activeShowAddCardSection(list.id)
                                }
                              >
                                <AddIcon className="text-[10px] text-gray-500 hover:text-black font-bold" />
                                <span className="text-[13px] text-gray-500 hover:text-black font-bold">
                                  Add Card
                                </span>
                              </div>
                              <CopyAllRounded className="text-[10px] text-gray-500 hover:text-black" />
                            </li>
                          )}
                        </div>
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

      {/* Card Details Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]  ">
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
