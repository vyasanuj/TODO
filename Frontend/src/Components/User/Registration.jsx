import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterUser, setError } from '../../Features/Authentication/Authenticationslice';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Registration() {

    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SubmitHandle = (e) => {
        e.preventDefault();
        // Your form submission logic here
        if (Username && Email && Password) {
            dispatch(RegisterUser({ username:Username , email : Email }))
            navigate('/dashboard');
        }
        else {
            dispatch(setError("all fields are required")) ; 
        }
        console.log({
            Username,
            Email,
            Password
        });
    }

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
                  {/* Add Login Button */}
                  <div className="mt-4 text-center">
                    <span className="text-white font-mono">Already registered?</span>
                    <Link
                        to="/login" // Route to your login component
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
