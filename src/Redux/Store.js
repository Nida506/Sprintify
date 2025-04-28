import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './BoardsSlice/BoardsSlice';
import userReducer from './UserSlice/userSlice';

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    user: userReducer,
  },
});

export default store;
