import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveTodo, UpdateTodo, ToggleComplete } from '../Features/Todo/Todoslice';

function Todos() {
  const todos = useSelector((state) => state.todo.Todos);
  const dispatch = useDispatch();

  // Local state to track which todo is in edit mode
  const [editId, setEditId] = useState(null); // ID of the todo being edited
  const [newText, setNewText] = useState(''); // New text for the todo being edited

  const handleEdit = (id, currentText) => {
    setEditId(id);  // Set the ID of the todo being edited
    setNewText(currentText); // Pre-fill the input with the current todo text
  };

  const handleSave = (id) => {
    if (newText.trim()) {  // Only update if the new text is not empty
      dispatch(UpdateTodo({ id, newtext: newText }));
      setEditId(null); // Exit edit mode
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(ToggleComplete(id));
  };

  return (
    <>
      <div className="text-white text-2xl mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-2 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded ${todo.completed ? 'opacity-70' : ''}`}
            key={todo.id}
          >
            {editId === todo.id && !todo.completed ? (
              // Render an input field if this todo is being edited and is not completed
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="bg-gray-800 text-white p-1 rounded border border-gray-600 focus:outline-none"
                />
                <button
                  onClick={() => handleSave(todo.id)}
                  className="bg-blue-500 text-white p-1 ml-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </>
            ) : (
              // Otherwise, just display the todo text
              <>
                <div className={`text-white flex-1 ${todo.completed ? 'line-through' : ''}`}>
                  {todo.text}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleToggleComplete(todo.id)}
                    className={`p-2 rounded-full border-2 ${todo.completed ? 'border-green-500 bg-green-500' : 'border-gray-500 hover:bg-green-500 hover:border-green-500'}`}
                  >
                    {todo.completed ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )}
                  </button>
                  {!todo.completed && (
                    <button
                      onClick={() => handleEdit(todo.id, todo.text)}
                      className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600"
                    >
                      Update
                    </button>
                  )} 
                  <button
                    onClick={() => dispatch(RemoveTodo(todo.id))}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
 

// import { RemoveTodo , UpdateTodo } from '../Features/Todo/Todoslice'
// import { useSelector , useDispatch } from 'react-redux'
// import { useState } from 'react'

// function Todos() {
//     const todos = useSelector(state => state.todo.Todos)
//     const dispatch = useDispatch()


//   // Local state to track which todo is in edit mode
//   const [editId, setEditId] = useState(null); // ID of the todo being edited
//   const [newText, setNewText] = useState(''); // New text for the todo being edited

//   const handleEdit = (id, currentText) => {
//     setEditId(id);  // Set the ID of the todo being edited
//     setNewText(currentText); // Pre-fill the input with the current todo text
//   };

//   const handleSave = (id) => {
//     if (newText.trim()) {  // Only update if the new text is not empty
//       dispatch(UpdateTodo({ id, newtext: newText }));
//       setEditId(null); // Exit edit mode
//     }
//   };
    

//   return (
//     <>
//         <div>Todos</div>
//             <ul className="list-none">
//             {todos.map((todo) => (
//             <li
//             className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//             key={todo.id}
//             >
//             {editId === todo.id ? (
//               // Render an input field if this todo is being edited
//               <>
//                 <input
//                   type="text"
//                   value={newText}
//                   onChange={(e) => setNewText(e.target.value)}
//                   className="bg-gray-800 text-white p-1 rounded"
//                 />
//                 <button
//                   onClick={() => handleSave(todo.id)}
//                   className="bg-blue-500 text-white p-2 ml-2 rounded"
//                 >
//                   Save
//                 </button>
//               </>
//             ) : (
//               // Otherwise, just display the todo text
//               <>
//                 <div className='text-white'>
//                   {todo.text}
//                 </div>
//                 <button
//                   onClick={() => handleEdit(todo.id, todo.text)}
//                   className="bg-yellow-500 text-white p-2 ml-2 rounded"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={() => dispatch(RemoveTodo(todo.id))}
//                   className="bg-red-500 text-white p-2 ml-2 rounded"
//                 >
//                   Remove
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </>

//   )
// }

// export default Todos



            {/* <button
             onClick={() => handleUpdate(todo.id, editText[todo.id])}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >U</button> */}

                        {/* <input
              type="text"
              value={editText[todo.id] || ''}
              onChange={(e) =>
                setEditText({ ...editText, [todo.id]: e.target.value })
              }
              placeholder="Edit todo"
              className="text-black px-2"
            /> */}

                // const [editText, setEditText] = useState({});

    // const handleUpdate = (id, newText) => {
    // dispatch(UpdateTodo({ id, newtext: newText }));
//   };



        {/* <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(RemoveTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul> */}