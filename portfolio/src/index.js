import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Contact from "./components/Contact"
import Projects from './components/Projects';
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
        path: "/about",
        element:<About />,
      },
      {
        path: "/contact",
        element:<Contact />,
      },   {
        path: "/projects",
        element:<Projects />,
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
