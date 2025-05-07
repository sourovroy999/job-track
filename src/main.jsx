import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

import { StrictMode } from 'react'

import './index.css'
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "./Components/Pages/Home";
import CompanyDetails from "./Components/Pages/CompanyDetails";
import Login from "./Components/Pages/Login";
import Registration from "./Components/Pages/Registration";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import MyProfile from "./Components/Pages/MyProfile";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('/joblist.json')

      },
      {
        path:'/company/:id',
        element:<CompanyDetails/>,
        loader:()=>fetch('/joblist.json'),


      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Registration/>
      },
      {
        path:'/profile',
        element:<ProtectedRoute>
          <MyProfile/>
        </ProtectedRoute>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>

    <RouterProvider router={router} />
    <Toaster/>
  </AuthProvider>
);

