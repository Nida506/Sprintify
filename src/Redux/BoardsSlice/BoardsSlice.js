import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'boardsData',
  initialState: {
    activeAddCardListId: '',
    boards: [
      {
        name: 'My Trello Board',
        _id: 'randomID2',
        bgColor: 'pink',
        lists: [
          {
            id: '4',
            title: 'To do',
            items: [
              {
                id: 'cdge3',
                content: 'I have made the home Page 1',
              },
              {
                id: 'cdge4',
                content: 'I have to made Navbar',
              },
              {
                id: 'cd464f',
                content: 'I have to made Footer',
              },
              {
                id: 'cdge64ad',
                content: 'I have to made Dashboard!',
              },
            ],
          },
          {
            id: '9',
            title: 'Done Tasks',
            items: [
              {
                id: 'cdge453',
                content: 'I have make repo',
              },
              {
                id: 'cdgead4',
                content: 'I have to push the code',
              },
              {
                id: 'cd464adff',
                content: 'I have to pull the code in my code',
              },
              {
                id: 'cdge64aadffd',
                content: 'I have to review the whole ocde',
              },
            ],
          },
          {
            id: '0',
            title: 'Incoming Tasks',
            items: [
              {
                id: 'cdgsdfe3',
                content: 'We to design the backend',
              },
              {
                id: 'cdgeasdf4',
                content: 'We have to add authentication',
              },
              {
                id: 'cd464gdsf',
                content: 'We have to add Workplave feature',
              },
              {
                id: 'cdge6asd4ad',
                content: 'We have to set responsiveness',
              },
            ],
          },
          {
            id: '80980sdf',
            title: 'Completed Tasks',
            items: [
              {
                id: 'cdgs98=+3',
                content: 'We to design the backend',
              },
              {
                id: 'df4',
                content: 'We have to add authentication',
              },
              {
                id: 'cd46',
                content: 'We have to add Workplave feature',
              },
              {
                id: 'd4ad',
                content: 'We have to set responsiveness',
              },
            ],
          },
        ],
      },
      {
        name: 'My Second Trello Board',
        _id: 'randomID3',
        bgColor: 'green',
        lists: [
          {
            id: '78k',
            title: 'To do',
            items: [
              {
                id: 'cdge3',
                content: 'I have made the home Page 1',
              },
              {
                id: 'cdge4',
                content: 'I have to made Navbar',
              },
              {
                id: 'cd464f',
                content: 'I have to made Footer',
              },
              {
                id: 'cdge64ad',
                content: 'I have to made Dashboard!',
              },
            ],
          },
          {
            id: '98h',
            title: 'Done Tasks',
            items: [
              {
                id: 'cdge453',
                content: 'I have make repo',
              },
              {
                id: 'cdgead4',
                content: 'I have to push the code',
              },
              {
                id: 'cd464adff',
                content: 'I have to pull the code in my code',
              },
              {
                id: 'cdge64aadffd',
                content: 'I have to review the whole ocde',
              },
            ],
          },
          {
            id: 'io3',
            title: 'Incoming Tasks',
            items: [
              {
                id: 'cdgsdfe3',
                content: 'We to design the backendkjhkj',
              },
              {
                id: 'cdgeasdf4',
                content: 'We have to add authenticationkkkkkk',
              },
              {
                id: 'cd464gdsf',
                content: 'We have to add Workplave featurekllkl',
              },
              {
                id: 'cdge6asd4ad',
                content: 'We have to set responsivenesslklkl',
              },
            ],
          },
        ],
      },
    ],
    active: {
      name: 'My Trello Board',
      _id: 'randomID2',
      bgColor: 'grey',
      lists: [
        {
          id: '4',
          title: 'To do',
          items: [
            {
              id: 'cdge3',
              content: 'I have made the home Page 1',
            },
            {
              id: 'cdge4',
              content: 'I have to made Navbar',
            },
            {
              id: 'cd464f',
              content: 'I have to made Footer',
            },
            {
              id: 'cdge64ad',
              content: 'I have to made Dashboard!',
            },
          ],
        },
        {
          id: '9',
          title: 'Done Tasks',
          items: [
            {
              id: 'cdge453',
              content: 'I have make repo',
            },
            {
              id: 'cdgead4',
              content: 'I have to push the code',
            },
            {
              id: 'cd464adff',
              content: 'I have to pull the code in my code',
            },
            {
              id: 'cdge64aadffd',
              content: 'I have to review the whole ocde',
            },
          ],
        },
        {
          id: '0',
          title: 'Incoming Tasks',
          items: [
            {
              id: 'cdgsdfe3',
              content: 'We to design the backend',
            },
            {
              id: 'cdgeasdf4',
              content: 'We have to add authentication',
            },
            {
              id: 'cd464gdsf',
              content: 'We have to add Workplave feature',
            },
            {
              id: 'cdge6asd4ad',
              content: 'We have to set responsiveness',
            },
          ],
        },
      ],
    },
  },
  reducers: {
    //to ad new board
    addBoard: (state, action) => action.payload,

    //to set of which list add new card section dispaly
    activeAddCardListId: (state, action) => ({
      ...state,
      activeAddCardListId: action.payload,
    }),

    //to add new list to the board
    addList: (state, action) => action.payload,

    //to add new item to the list of the given dashboard
    addNewCardToList: (state, action) => {
      console.log(action);
      const newCard = { id: crypto.randomUUID(), content: action.payload.item };
      const boardList = action.payload.listId;

      // Update the active board's lists
      const updatedBoard = {
        ...state.active,
        lists: state.active.lists.map((list) => {
          if (list.id === boardList) {
            // Append the new card to the items array
            return { ...list, items: [...list.items, newCard] };
          } else {
            return list;
          }
        }),
      };

      // Update the boards array
      const boardsNewData = state.boards.map((board) => {
        if (board._id === state.active._id) {
          return updatedBoard;
        } else {
          return board;
        }
      });
      // Return the new state
      return {
        ...state,
        boards: boardsNewData,
        activeAddCardListId: '', // Reset the active add card ID
        active: updatedBoard, // Update the active board
      };
    },

    //to set which board should display on the dashbaord
    activeBoard: (state, action) => {
      let activeBoard = state.boards.filter(
        (board) => board._id === action.payload
      );
      if (!activeBoard?.length) return state;
      return { ...state, active: activeBoard[0] };
    },

    updateBoardListOnDrag: (state, action) => {
      state.active.lists = action.payload;
      state.boards = state.boards.map((dashboard) => {
        if (dashboard._id === state.active._id) return state.active;
        return dashboard;
      });
    },
  },
});
export let {
  addBoard,
  addList,
  activeBoard,
  activeAddCardListId,
  addNewCardToList,
  updateBoardListOnDrag,
} = boardSlice.actions;
export default boardSlice.reducer;
