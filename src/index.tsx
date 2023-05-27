import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    
  }
]);

root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>
);
