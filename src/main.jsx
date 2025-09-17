import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import './styles/index.css'
  
// components
import Home from './js/components/Home.jsx';
import { ContactProvider } from './js/ContactContext.jsx';
import Layout from './js/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContactProvider>
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>
  </ContactProvider>,
)