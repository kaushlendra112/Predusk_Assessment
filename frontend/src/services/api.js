import axios from 'axios';

const API_BASE_URL = ' https://kaushlendra-profile.onrender.com';

export const getProfile = () => axios.get(`${API_BASE_URL}/api/profile`);

export const getAllSkills = () => axios.get(`${API_BASE_URL}/api/skills/top`);
export const updateSkills = (skills) => axios.put(`${API_BASE_URL}/api/skills`, { skills });

export const addProject = (data) => axios.post(`${API_BASE_URL}/api/projects`, data);
export const updateProject = (id, data) => axios.put(`${API_BASE_URL}/api/projects/${id}`, data);
export const deleteProject = (id) => axios.delete(`${API_BASE_URL}/api/projects/${id}`);

export const addExperience = (data) => axios.post(`${API_BASE_URL}/api/experience`, data);
export const updateExperience = (id, data) => axios.put(`${API_BASE_URL}/api/experience/${id}`, data);
export const deleteExperience = (id) => axios.delete(`${API_BASE_URL}/api/experience/${id}`);