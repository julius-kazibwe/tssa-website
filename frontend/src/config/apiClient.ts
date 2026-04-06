import axios from 'axios';
import { API_BASE_URL } from './api';

// Shared axios instance so all frontend calls resolve from one base URL.
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});
