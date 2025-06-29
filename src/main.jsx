import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherContextProvider from './store/WeatherContext.jsx'
import Home from './components/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Today from './components/Today.jsx'
import Hourly from './components/Hourly.jsx'
import Daily from './components/Daily.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element: <Home/>,
  children:[
      {path:'today', element: <Today/>},
      {path:'hourly', element: <Hourly/>},
      {path:'daily', element: <Daily/>}  
    ]
  },
])


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <WeatherContextProvider>
    <RouterProvider router={router} />
    </WeatherContextProvider>
  </StrictMode>,
)
