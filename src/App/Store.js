// src/App/Store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/TodoSlice'; // Ensure the path is correct

const store = configureStore({
    reducer: todoReducer
});

export default store; // Correctly exporting the store


