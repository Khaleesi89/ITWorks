import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Card from './components/Servicios/Cards'
import Ofertas from './components/Servicios/Ofertas'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card />
    <Ofertas />
    
  </React.StrictMode>
  
)
