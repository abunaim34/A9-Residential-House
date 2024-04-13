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
import SubCetagoriesDetails from './Components/SubCetagoriesDetails';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './Components/ErrorPage';
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/Residential.json')
      },
      {
        path: "/subCategory/:id",
        element: <PrivateRouter><SubCetagoriesDetails /></PrivateRouter>,
        loader: () => fetch('/Residential.json')
      },
      {
        path: "/updateProfile",
        element: <PrivateRouter><UpdateProfile /></PrivateRouter>
      },
      {
        path: "/contact",
        element: <PrivateRouter><Contact /></PrivateRouter>
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
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
