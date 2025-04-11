import axios from "axios";

const API_BASE = "http://localhost:5000";

export const fetchQuestion = () => axios.get(`${API_BASE}/questions`);
export const generateCode = (question) => axios.post(`${API_BASE}/code/generate`, { question });
export const generateTests = (question) => axios.post(`${API_BASE}/tests/generate`, { question });
export const evaluateSolution = (code, tests) => axios.post(`${API_BASE}/eval/run`, { code, tests });
