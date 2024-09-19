import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

import Registration from './Components/User/Registration';
import Login from './Components/User/Login';
import Dashboard from './Components/Dashbord'; // This should be fine if Dashboard.jsx is in Components


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Route for Registration as the landing page */}
        <Route path="/" element={<Registration />}/>
    

        {/* Separate Route for Login */}
        <Route path="/login" element={<Login />} />

        {/* Add Route for Dashboard which contains both AddTodo and Todo */}
        <Route path="/dashboard" element={<Dashboard />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
