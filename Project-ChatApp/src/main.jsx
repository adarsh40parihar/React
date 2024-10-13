import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Routing_app from './POC-Learning/Routing_app.jsx'
import './index.css'
import { BrowserRouter } from  'react-router-dom'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routing_app/>
  </BrowserRouter>
);
