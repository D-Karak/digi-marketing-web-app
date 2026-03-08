import axios from 'axios';

// ==========================================
// 1. Core Connection Base Setup
// ==========================================
// This file ONLY handles establishing the base connection to our custom Node.js Express Backend.
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_SERVER
    ? `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api`
    : 'http://localhost:5001/api';

// Create a unified client so we don't repeat the URL and headers in every file
const axiosClient = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
