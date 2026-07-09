
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'; // 1. Axios import karein
import { GoogleOAuthProvider } from '@react-oauth/google';

// 2. Yahan baseURL set karein
axios.defaults.baseURL = 'http://localhost:3000';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID_YAHAN_AAYEGA">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)