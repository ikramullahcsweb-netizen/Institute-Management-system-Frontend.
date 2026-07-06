import axios from 'axios';

// Yeh aapke live backend URL ko automatic catch kar lega
const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true // Cookies, sessions aur JWT tokens ke liye zaroori hai
});

export default API;
