import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CategoryDb from './components/CategoryDb.jsx'

const routes = createBrowserRouter([//mati, esto hice en el main, pero como no lo iba a usar, solo el sidebar
  {                                 //lo deje asi
    path: '/',
    element: <App />
  },
  {
    path: '/categories',
    element: <CategoryDb />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />               
  </React.StrictMode>,
)//la linea 16 tambien, la puse recien, podria crearse la carpeta routes tambien
