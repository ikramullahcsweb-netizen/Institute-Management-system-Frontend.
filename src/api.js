import axios from 'axios';

const API = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── Session clear karo aur role ke hisaab se login pe bhejo ──
export const clearPreviousSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  localStorage.removeItem('user');
};

export const redirectToLogin = () => {
  const role = localStorage.getItem('userRole');
  clearPreviousSession();
  if (role === 'student')      window.location.href = '/StudentLogin';
  else if (role === 'teacher') window.location.href = '/TeacherLogin';
  else if (role === 'admin')   window.location.href = '/adminlogin';
  else if (role === 'manager') window.location.href = '/managerlogin';
  else                         window.location.href = '/login';
};

// ── Request interceptor: har request mein Bearer token lagao ──
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response interceptor ──
// NOTE: 401 pe AUTO-REDIRECT NAHI karte
// Har page khud apna error handle karta hai (Swal ya toast)
// Sirf agar token localStorage mein NAHI hai aur 401 aaye toh redirect karo
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const status  = error.response?.status;
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';

    if (status === 401) {
      const token = localStorage.getItem('token');
      // Agar token hai toh page apna error handle kare — redirect mat karo
      // Agar token nahi hai toh seedha login pe bhejo
      if (!token) {
        redirectToLogin();
      }
      // Token hai lekin 401 — error page pe show hoga (Swal etc.)
      // Auto redirect nahi — user khud decide kare
    }

    return Promise.reject({ ...error, message });
  }
);

export default API;
