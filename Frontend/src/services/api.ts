import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4001',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('@usrToken')}`
    }
});

export default api;