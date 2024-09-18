import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Features/Todo/Todoslice"
export const Store = configureStore({
    // reducer : TodoReducer
    reducer : {
        todo: TodoReducer
    }
})