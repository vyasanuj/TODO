import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../Features/Todo/Todoslice"
import AuthenticationReducer  from "../Features/Authentication/Authenticationslice"
export const Store = configureStore({
    // reducer : TodoReducer
    reducer : {
        todo: TodoReducer ,
        Authentication : AuthenticationReducer
    }
})