import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import { RegisterUser, setError } from '../../Features/Authentication/Authenticationslice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Access user data from Redux store (Assuming you store user data in Authentication slice)
    const user = useSelector((state) => state.Authentication.user); 

    const SubmitHandle = async (e) => {
        e.preventDefault();

        // You can access the user data from the store if required
        // console.log("User from store:", user);

        const userData = {
           Username,
            Email,
           Password
        };

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData) 
            });

            const data = await response.json(userData);

            if (response.ok) {
                dispatch(RegisterUser({ username: Username, email: Email }));
                navigate('/dashboard');
            } else {
                dispatch(setError(data.message || 'Registration failed'));
            }
        } catch (error) {
            console.error("Error registering user:", error);
            dispatch(setError("An error occurred while registering"));
        }
    };

    console.log("User from store:", user);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl text-white font-bold mb-6 text-center font-mono">Register</h1>
                <form onSubmit={SubmitHandle} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={Username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-mono"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-mono"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-mono"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 font-mono"
                    >
                        Submit
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-white font-mono">Already registered?</span>
                    <Link
                        to="/login"
                        className="text-indigo-500 hover:underline ml-2 font-mono"
                    >
                        Login Here
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Registration;





// import React, { useState } from 'react';
// import { useDispatch  , useSelector } from 'react-redux';
// import { RegisterUser, setError } from '../../Features/Authentication/Authenticationslice';
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';



// function Registration() {

//     const [Username, setUsername] = useState("");
//     const [Email, setEmail] = useState("");
//     const [Password, setPassword] = useState("");

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const user = useSelector((state) => state.Authentication.user); 

//     const SubmitHandle = async (e) => {
//         e.preventDefault(); 

//         console.log("User from store:", user);

//         const userData = {
//             username: Username || user?.username,  // Use form value or user value from store
//             email: Email || user?.email,
//             password: Password
//         };

//         const responce = await fetch (`http://localhost:8000/api/v1/users/register`,{
//             method : "POST",
//             headers : {
//                 "Content-Type" : "application/json"
//             },
//             body : JSON.stringify(userData)
//         })
        
//         Your form submission logic here
//         if (Username && Email && Password) {
//             dispatch(RegisterUser({ username:Username , email : Email }))
//             navigate('/dashboard');
//         }
//         else {
//             dispatch(setError("all fields are required")) ; 
//         }
//         console.log({
//             Username,
//             Email,
//             Password
//         });


//         if (Username && Email && Password) {
//             try {
//               RegisterUser({ username: Username, email: Email, password: Password });
//               navigate('/dashboard');
//             } catch (error) {
//               dispatch(setError("Registration failed"));
//             }
//           } else {
//             dispatch(setError("All fields are required"));
//           }
          
//     }

//     return (
//         <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
//             <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h1 className="text-3xl text-white font-bold mb-6 text-center font-mono">Register</h1>
//                 <form onSubmit={SubmitHandle} className="space-y-4">
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             value={Username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-mono"
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             value={Email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-mono"
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={Password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-mono"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 font-mono"
//                     >
//                         Submit
//                     </button>
                    
//                 </form>
//                   {/* Add Login Button */}
//                   <div className="mt-4 text-center">
//                     <span className="text-white font-mono">Already registered?</span>
//                     <Link
//                         to="/login" // Route to your login component
//                         className="text-indigo-500 hover:underline ml-2 font-mono"
//                     >
//                         Login Here
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Registration;
