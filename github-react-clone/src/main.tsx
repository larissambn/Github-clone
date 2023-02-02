import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home} from './routes/home'

//pages

//configurar e construir objeto.
//definir componente principal da aplicação. 
//elementos das páginas e componentes repetidos dela.
// no children, página por página.

const Router = createBrowserRouter([
  {
    path :"/",
    element : <App/>,
    children : [{
      path : "/",
      element: <Home/>
    }]
  }
]) 

//Router provider = passar o objeto criado para o App.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = {Router}/>
  </React.StrictMode>,
)
