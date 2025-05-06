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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('joblist.json')

      },
      {

      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

