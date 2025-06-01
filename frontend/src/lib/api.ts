import axios from 'axios';

if (!import.meta.env.VITE_API_URL) {
    throw new Error('VITE_API_URL is not defined in environment variables');
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setAuthToken = (token: string) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('token', token);
    } else {
        delete api.defaults.headers.common['Authorization'];
        localStorage.removeItem('token');
    }
};

// Initialize token from localStorage
const token = localStorage.getItem('token');
if (token) {
    setAuthToken(token);
}

export default api;
