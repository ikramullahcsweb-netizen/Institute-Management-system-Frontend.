import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://vercel.app",
    withCredentials: true // Cookies, sessions aur JWT tokens ke liye zaroori hai
});

export default API;
