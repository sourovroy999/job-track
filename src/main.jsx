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
        path:'/registration',
        element:<Registration/>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>

    <RouterProvider router={router} />
  </AuthProvider>
);

