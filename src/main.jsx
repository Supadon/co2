import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Contact from './pages/Contact.jsx'
import Design from './pages/Design.jsx'
import Register from './pages/Register.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "design",
    element: <Design />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "contact",
    element: <Contact />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
