import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from "./components/Contact"
import { createBrowserRouter, RouterProvider } from
  'react-router-dom';
import Body from './components/Body';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Body />,
        
      },
      {
        path: "#contact1",
        element:<Contact />,
      }, 
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
