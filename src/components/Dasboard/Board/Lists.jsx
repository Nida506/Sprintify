import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddIcon from "@mui/icons-material/Add";
import { CopyAllRounded, Edit } from "@mui/icons-material";
import { MoreHorizontalIcon } from "lucide-react";
import axios from "axios";

import {
  activeAddCardListId,
  updateBoardListOnDrag,
} from "@/Redux/BoardsSlice/BoardsSlice";
import AddCard from "./AddCard";
import AddList from "./AddList";
import CardDetail from "./CardDetail";
import { BASE_URL } from "@/utils/constants";

function Lists({ activeDashboard }) {
  const dispatch = useDispatch();

  const [selectedCard, setSelectedCard] = useState(null);
  const [addListModelBoardId, setAddListModelBoardId] = useState(null);
  const [dropdown, setDropDown] = useState(null);
  const [editingListId, setEditingListId] = useState(null);
  const [newListName, setNewListName] = useState("");

  const activeAddCardListID = useSelector(
    (store) => store?.boards?.activeAddCardListId
  );

  useEffect(() => {
    dispatch(activeAddCardListId(""));
  }, [activeDashboard]);

  console.log(activeDashboard);

  useEffect(() => {
    document.body.style.overflow = selectedCard ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCard]);

  const activeShowAddCardSection = (id) => {
    dispatch(activeAddCardListId(id));
  };

  const editListHandler = (list) => {
    setNewListName(list.name);
    setEditingListId(list._id);
    setDropDown(false);
  };

  const handleListNameChange = (e) => setNewListName(e.target.value);

  const saveListName = async (list) => {
    if (!newListName.trim() || newListName === list.name) {
      setEditingListId(null);
      return;
    }

    try {
      const res = await axios.patch(
        BASE_URL + "/listName",
        {
          list_id: list._id,
          name: newListName.trim(),
        },
        { withCredentials: true }
      );

      if (res.data?.error === false) {
        const updatedLists = activeDashboard.lists.map((l) =>
          l._id === list._id ? { ...l, name: newListName.trim() } : l
        );
        dispatch(updateBoardListOnDrag(updatedLists));
      }
    } catch (err) {
      console.error("Failed to update list name", err);
    }

    setEditingListId(null);
  };

  const deleteListHandler = async (list_id) => {
    setDropDown(false);
    try {
      const res = await axios.delete(BASE_URL + "/deleteList", {
        data: { list_id },
        withCredentials: true,
      });

      if (res.data?.error === false) {
        const updatedLists = activeDashboard.lists.filter(
          (list) => list._id !== list_id
        );
        dispatch(updateBoardListOnDrag(updatedLists));
      }
    } catch (err) {
      console.error("Error deleting list:", err);
    }
  };

  const onDragEnd = async (result) => {
    const { source, destination, type } = result;
    if (!destination) return;
  
    const listsCopy = JSON.parse(JSON.stringify(activeDashboard.lists));
  
    if (type === "CARD") {
      const sourceListIndex = listsCopy.findIndex(
        (list) => list._id === source.droppableId
      );
      const destListIndex = listsCopy.findIndex(
        (list) => list._id === destination.droppableId
      );
  
      const [movedCard] = listsCopy[sourceListIndex].cards.splice(source.index, 1);
      listsCopy[destListIndex].cards.splice(destination.index, 0, movedCard);
  
      try {
        const response = await axios.post(
          BASE_URL + "/update-position",
          {
            cardId: movedCard._id,
            sourceListId: listsCopy[sourceListIndex]._id,
            destinationListId: listsCopy[destListIndex]._id,
            sourceIndex: source.index,
            destinationIndex: destination.index,
          },
          { withCredentials: true }
        );
  
        console.log("card position updated:", response.data);
  
        dispatch(updateBoardListOnDrag(listsCopy));
      } catch (err) {
        console.error("Failed to update card position", err);
      }
    }
  };
  
  
  return (
    <div className="flex flex-col w-full flex-grow relative h-full">
      <div className="flex flex-row h-full w-full overflow-y-auto overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
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
                    key={list._id}
                    draggableId={list._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-[#EFF2F3] flex-shrink-0 h-fit w-64 rounded-2xl overflow-hidden"
                      >
                        <div className="flex flex-col h-full max-h-[400px] p-2">
                          <div className="flex justify-between items-center px-0.5 mt-1">
                            {editingListId === list._id ? (
                              <input
                                className="font-semibold text-sm px-2 py-1 border rounded w-full"
                                value={newListName}
                                onChange={handleListNameChange}
                                onBlur={() => saveListName(list)}
                                onKeyDown={(e) =>
                                  e.key === "Enter" && saveListName(list)
                                }
                                autoFocus
                              />
                            ) : (
                              <span className="font-semibold text-sm">
                                {list.name}
                              </span>
                            )}
                            <div className="relative">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDropDown(
                                    dropdown === list._id ? null : list._id
                                  );
                                }}
                                className="bg-gray-400 p-1 rounded-full ms-2"
                              >
                                <MoreHorizontalIcon className="text-[30px] hover:text-black" />
                              </button>
                              {dropdown === list._id && (
                                <div className="absolute top-full right-0 bg-white shadow-lg rounded-md z-50 w-32 border-2 border-purple">
                                  <button
                                    onClick={() => editListHandler(list)}
                                    className="w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
                                  >
                                    Edit List Name
                                  </button>
                                  <button
                                    onClick={() => deleteListHandler(list._id)}
                                    className="w-full text-left px-3 py-1 text-sm hover:bg-gray-100"
                                  >
                                    Delete List
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>

                          <Droppable droppableId={list._id} type="CARD">
                            {(provided) => (
                              <div
                                className="py-2 flex flex-col gap-2 overflow-y-auto h-full"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                              >
                                {list.cards?.map((card, index) => (
                                  <Draggable
                                    key={card._id}
                                    draggableId={card._id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => (
                                      <div
                                        className={`group border relative shadow-md item flex justify-between items-center py-2 px-1 mt-[7px] bg-white rounded-lg ${
                                          snapshot.isDragging
                                            ? "bg-gray-300 opacity-50 mb-11 rotate-6"
                                            : ""
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
                                        <p className="text-[14px] px-1 w-full break-words">
                                          {card.description}
                                        </p>
                                        <div className="hidden group-hover:flex absolute top-1 right-1">
                                          <Edit
                                            fontSize="18"
                                            className="cursor-pointer"
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                                {activeAddCardListID === list._id && (
                                  <AddCard list={list} />
                                )}
                              </div>
                            )}
                          </Droppable>
                        </div>

                       {!activeAddCardListID &&  <li className="item flex p-[5px] rounded cursor-pointer">
                          <div
                            className="flex flex-row w-[90%] gap-1 items-center hover:bg-gray-300 p-1 rounded-lg"
                            onClick={() => activeShowAddCardSection(list._id)}
                          >
                            <AddIcon className="text-[10px] text-gray-500" />
                            <span className="text-[13px] text-gray-500 font-bold">
                              Add Card
                            </span>
                          </div>
                          <CopyAllRounded className="text-[10px] text-gray-500 hover:text-black" />
                        </li>}
                      </div>
                    )}
                  </Draggable>
                ))}

                <div>
                  {addListModelBoardId !== activeDashboard._id ? (
                    <div
                      id="createNewList"
                      className="bg-white/30 backdrop-blur-mdflex-shrink-0 h-fit w-56 rounded overflow-hidden"
                    >
                      <div
                        onClick={() =>
                          setAddListModelBoardId(activeDashboard._id)
                        }
                        className="cursor-pointer flex flex-row w-60 h-[40px] gap-1 items-center hover:rounded-lg"
                      >
                        <AddIcon className="text-[10px] text-gray-500" />
                        <span className="text-[13px] text-black font-bold">
                          Add List
                        </span>
                      </div>
                    </div>
                  ) : (
                    <AddList
                      setAddListModel={() => setAddListModelBoardId(null)}
                    />
                  )}
                </div>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="max-h-[88vh] bg-white rounded-lg shadow-lg relative flex flex-col overflow-hidden">
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
