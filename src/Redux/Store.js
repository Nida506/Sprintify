import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './BoardsSlice/BoardsSlice';

const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
});

export default store;
