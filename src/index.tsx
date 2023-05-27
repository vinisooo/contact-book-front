import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from './styles/GlobalStyles';

import { Register } from './pages/Register.tsx/Register';

import { ContextProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path:"/register",
    element: <Register/>
  }
]);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
      <GlobalStyles/>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
