import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import List from './components/List.jsx';
import Home from './components/Home.jsx';
import Car from './components/Car.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "collections",
        element: <List />
      },
      {
        path: "brand",
        element: <Car />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,

)
