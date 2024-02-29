import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Weather from './components/Weather.jsx'
import Quote from './components/Quote.jsx'
import Meme from './components/Meme.jsx'
import Random from './components/Random.jsx'
import Gender from './components/Gender.jsx'



const router = createBrowserRouter([

{
  path:'/',
  element:<App/>,


  children:[

  {
    path:"Weather",
    element:<Weather/>,
    index:true,
  },
  {
    path:"Quote",
    element: <Quote/>,
    index:true,

  },
  {
    path:"Meme",
    element:<Meme/>,
    index:true,

  },
  {
    path:"Random",
    element:<Random/>,
    index:true,

  },
  {
    path:"Gender",
    element:<Gender/>,
    index:true,

  }

]
},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
