import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'boardsData',
  initialState: {
    activeAddCardListId: '',
    boards: [],
    active: {},
    chatMessages: [],
  },
  reducers: {
    fetchAllDashboards: (state, action) => {
      return { ...state, boards: action.payload };
    },
    //to ad new board
    addBoard: (state, action) => {
      return { ...state, boards: [...action.payload, ...state.boards] };
    },

    //to set of which list add new card section dispaly
    activeAddCardListId: (state, action) => {
      return {
        ...state,
        activeAddCardListId: action.payload,
      };
    },

    //to add new item to the list of the given dashboard
    addNewCardToList: (state, action) => {
      const newCard = action.payload.item;
      const boardList = action.payload.listId;

      // Update the active board's lists
      const updatedBoard = {
        ...state.active,
        lists: state.active.lists.map((list) => {
          if (list._id === boardList) {
            // Append the new card to the items array
            return { ...list, cards: [...list.cards, newCard] };
          } else {
            return list;
          }
        }),
      };

      // Return the new state
      return {
        ...state,
        activeAddCardListId: '', // Reset the active add card ID
        active: updatedBoard, // Update the active board
      };
    },

    //to set which board should display on the dashbaord
    activeBoard: (state, action) => {
      return { ...state, active: action.payload };
    },

    updateBoardListOnDrag: (state, action) => {
      state.active.lists = action.payload;
      state.boards = state.boards.map((dashboard) => {
        if (dashboard._id === state.active._id) return state.active;
        return dashboard;
      });
    },
    addNewListToBoard: (state, action) => {
      if (!action?.payload?.board_id || !action.payload._id) return;

      const boardId = action.payload.board_id;
      const listId = action.payload._id;

      // Update board in state.boards
      const board = state.boards.find((b) => b._id === boardId);
      if (board) {
        const alreadyExists = board.lists.some((l) => l._id === listId);
        if (!alreadyExists) {
          board.lists.push(action.payload);
        }
      }

      // Update active lists if it matches
      if (state.active?._id === boardId) {
        const alreadyExists = state.active.lists.some((l) => l._id === listId);
        if (!alreadyExists) {
          state.active.lists.push(action.payload);
        }
      }
    },
    addNewMessage: (state, action) => {
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload],
      };
    },
    addPreviousMessages: (state, action) => {
      return {
        ...state,
        chatMessages: action.payload,
      };
    },
  },
});
export let {
  addBoard,
  activeBoard,
  activeAddCardListId,
  addNewListToBoard,
  addNewCardToList,
  updateBoardListOnDrag,
  fetchAllDashboards,
  addNewMessage,
  addPreviousMessages,
} = boardSlice.actions;
export default boardSlice.reducer;
