import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from './styles/GlobalStyles';

import { Register } from './pages/Register.tsx/Register';
import { Login } from './pages/Login/Login';
import { Contacts } from './pages/Contacts/Contacts';
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/register",
        element: <Register/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/contacts",
        element: <Contacts/>
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      <GlobalStyles/>
  </React.StrictMode>
);
