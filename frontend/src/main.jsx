import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster toastOptions={{ style:{background:"rgb(51 65 85)", color:"#fff"},
    
    }}/>
    <App />
  </React.StrictMode>,
)
