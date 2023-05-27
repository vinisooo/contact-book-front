import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>
);
