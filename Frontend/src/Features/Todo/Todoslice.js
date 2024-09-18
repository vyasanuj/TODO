import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todos : [{
        id:1 ,
        text : "Hello World" ,
        completed : false 
    }]
}

export const Todoslice = createSlice ({
    name : "todo",
    initialState ,
    reducers : {
        ADDTodo : (state , action) => {
            const todo = {
                id : nanoid() ,
                text : action.payload , 
                completed: false 
            }
            state.Todos.push(todo)
        },
        UpdateTodo: (state, action) => {
            const { id, newtext } = action.payload;
            const todo = state.Todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = newtext;
            }
        } ,
        ToggleComplete: (state, action) => {
            const todo = state.Todos.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed; // Toggle the completed state
            }
          } ,
        RemoveTodo : (state , action) => {
            state.Todos = state.Todos.filter((todo)=>
                todo.id !== action.payload
            )
        } 

    }
})

export const {ADDTodo , RemoveTodo , UpdateTodo , ToggleComplete} = Todoslice.actions
export default Todoslice.reducer




        // UPDATETodo: (state, action) => {
        //     const { id, text } = action.payload;
        //     const todoIndex = state.Todos.findIndex((todo) => todo.id === id);
          
        //     if (todoIndex !== -1) {
        //       state.Todos[todoIndex].text   
        //    = text; // Update text property (caution: mutation)
        //     }
        //   },


        // UpdateTodo : (state , action) => {
        //     const { id ,  newtext } = action.payload 
        //     const todo = state.Todos.find((todo)=>todo.id === id)
        //     if (todo){
        //         todo.text = newtext 
        //     }
        // }
        // updateTodo : (state , action) => {
        //     state.Todos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
        
            
        //   }