import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'boardsData',
  initialState: {
    activeAddCardListId: '',
    //     name: 'My Trello Board',
    //     _id: 'randomID2',
    //     bgColor: 'pink',
    //     lists: [
    //       {
    //         id: '4sdfsdf',
    //         title: 'To do',
    //         items: [
    //           {
    //             id: 'cdge3',
    //             content: 'I have made the home Page 1',
    //           },
    //           {
    //             id: 'cdge4',
    //             content: 'I have to made Navbar',
    //           },
    //           {
    //             id: 'cd464f',
    //             content: 'I have to made Footer',
    //           },
    //           {
    //             id: 'cdge64ad',
    //             content: 'I have to made Dashboard!',
    //           },
    //         ],
    //       },
    //       {
    //         id: '9sdfdf',
    //         title: 'Done Tasks',
    //         items: [
    //           {
    //             id: 'cdge453',
    //             content: 'I have make repo',
    //           },
    //           {
    //             id: 'cdgead4',
    //             content: 'I have to push the code',
    //           },
    //           {
    //             id: 'cd464adff',
    //             content: 'I have to pull the code in my code',
    //           },
    //           {
    //             id: 'cdge64aadffd',
    //             content: 'I have to review the whole ocde',
    //           },
    //         ],
    //       },
    //       {
    //         id: '0sdfsdfdsf',
    //         title: 'Incoming Tasks',
    //         items: [
    //           {
    //             id: 'cdgsdfe3',
    //             content: 'We to design the backend',
    //           },
    //           {
    //             id: 'cdgeasdf4',
    //             content: 'We have to add authentication',
    //           },
    //           {
    //             id: 'cd464gdsf',
    //             content: 'We have to add Workplave feature',
    //           },
    //           {
    //             id: 'cdge6asd4ad',
    //             content: 'We have to set responsiveness',
    //           },
    //         ],
    //       },
    //       {
    //         id: '80980sdf',
    //         title: 'Completed Tasks',
    //         items: [
    //           {
    //             id: 'cdgs98=+3',
    //             content: 'We to design the backend',
    //           },
    //           {
    //             id: 'df4',
    //             content: 'We have to add authentication',
    //           },
    //           {
    //             id: 'cd46',
    //             content: 'We have to add Workplave feature',
    //           },
    //           {
    //             id: 'd4ad',
    //             content: 'We have to set responsiveness',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     name: 'My Second Trello Board',
    //     _id: 'randomID3',
    //     bgColor: 'green',
    //     lists: [
    //       {
    //         id: '78ksdfsd',
    //         title: 'To do',
    //         items: [
    //           {
    //             id: 'cdge3',
    //             content: 'I have made the home Page 1',
    //           },
    //           {
    //             id: 'cdge4',
    //             content: 'I have to made Navbar',
    //           },
    //           {
    //             id: 'cd464f',
    //             content: 'I have to made Footer',
    //           },
    //           {
    //             id: 'cdge64ad',
    //             content: 'I have to made Dashboard!',
    //           },
    //         ],
    //       },
    //       {
    //         id: '98hsdfd',
    //         title: 'Done Tasks',
    //         items: [
    //           {
    //             id: 'cdge453',
    //             content: 'I have make repo',
    //           },
    //           {
    //             id: 'cdgead4',
    //             content: 'I have to push the code',
    //           },
    //           {
    //             id: 'cd464adff',
    //             content: 'I have to pull the code in my code',
    //           },
    //           {
    //             id: 'cdge64aadffd',
    //             content: 'I have to review the whole ocde',
    //           },
    //         ],
    //       },
    //       {
    //         id: 'io3sdfds',
    //         title: 'Incoming Tasks',
    //         items: [
    //           {
    //             id: 'cdgsdfe3',
    //             content: 'We to design the backendkjhkj',
    //           },
    //           {
    //             id: 'cdgeasdf4',
    //             content: 'We have to add authenticationkkkkkk',
    //           },
    //           {
    //             id: 'cd464gdsf',
    //             content: 'We have to add Workplave featurekllkl',
    //           },
    //           {
    //             id: 'cdge6asd4ad',
    //             content: 'We have to set responsivenesslklkl',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
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
      console.log(action.payload);
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
      let previosMessage = state.chatMessages ? state.chatMessages : [];
      return {
        ...state,
        chatMessages: [...previosMessage, action.payload],
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
  removeListFromBoard,
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
