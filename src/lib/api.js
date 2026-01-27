import axios from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  '';

export const api = axios.create({
  baseURL: "/api",
  headers: { Accept: 'application/json' },
  
});
