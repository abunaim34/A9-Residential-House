import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import UpdateProfile from './Pages/UpdateProfile';
import Contact from './Pages/Contact';
import Login from './Components/Login';
import AuthProvider from './Provider/AuthProvider';
import Register from './Components/Register';
import CardDetails from './Components/CardDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/Residential.json')
      },
      {
        path: "/:id",
        element: <CardDetails />,
        loader: () => fetch('/Residential.json')
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
