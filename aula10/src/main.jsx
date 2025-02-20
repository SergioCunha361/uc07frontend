import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <App />
  </StrictMode>,
)

