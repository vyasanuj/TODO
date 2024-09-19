import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginUser, setError } from '../../Features/Authentication/Authenticationslice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (Username && Password) {
            dispatch(LoginUser({ username: Username }));
            navigate('/dashboard');
        } else {
            dispatch(setError("Please fill in all fields"));
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl text-white font-bold mb-6 text-center font-mono">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-mono"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white font-mono"
                    />
                    <button
                        type="submit"
                        className="w-full p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 font-mono"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
