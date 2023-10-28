import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((req) => {
    return {
        ...req,
        baseURL: serverURI,
        withCredentials: true,
        headers: {
            ...req.headers,
            'Content-Type': 'application/json',
        },
    }
});

export default api;