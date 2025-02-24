import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Portfolio from './Components/portfolio/portfolio';
import Layout from "./Components/Layout/Layout";
import './App.css'
import { RouterProvider,createHashRouter } from "react-router-dom";
export default function App() {
 
  const router  = createHashRouter ([
    {path:"",element:<Layout/>,children:[
      {index:true, element:<Home/>},
      {path:"about",element:<About/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>},
    ]}
  ])

  return (
    <>
  <RouterProvider router={router}/>   
    </>
  )
}


