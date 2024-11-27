import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './components/Main.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader : ()=> fetch('http://localhost:5000/addCoffee')
  },
  {
    path:"/addCoffee",
   element:<AddCoffee/>
   
  },
  {
    path:"/updateCoffee/:id",
    element:<UpdateCoffee/>,
    loader : ({params})=> fetch(`http://localhost:5000/addCoffee/${params.id}`)
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
       <Main />
    </RouterProvider>
  </StrictMode>,
)
