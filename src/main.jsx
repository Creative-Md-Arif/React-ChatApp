import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// eslint-disable-next-line no-unused-vars
import firebaseConfig from './firebaseConfig.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
