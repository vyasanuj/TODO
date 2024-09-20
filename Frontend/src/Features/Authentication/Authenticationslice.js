import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null ,
    IsAuthenticated : false ,
    error : null
}

export const AuthenticationSlice = createSlice ({

    name : 'authentication',
    initialState ,

    reducers : {
        RegisterUser : (state,action) => {
            state.user = {
                username: action.payload.username,
                email: action.payload.email 
            } 
            state.IsAuthenticated = true 
            
        },

        LoginUser : (state , action) => {
            state.user = {
                username : action.payload.username ,
                email : action.payload.email
            }
            state.IsAuthenticated = true
            
        },
        LogoutUser : (state,action) => {
            state.user = null ,
            state.IsAuthenticated = false
        },
        setError: (state, action) => {
            state.error = action.payload;
        }

    }


})

export const { RegisterUser, LoginUser, logoutUser, setError } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;