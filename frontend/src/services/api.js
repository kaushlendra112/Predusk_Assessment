import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';

export const getProfile = () => axios.get(`/api/profile`);
export const getAllSkills = () => axios.get(`/api/skills/top`);
export const updateSkills = (skills) => axios.put(`/api/skills`, { skills });

export const addProject = (data) => axios.post(`/api/projects`, data);
export const updateProject = (id, data) => axios.put(`/api/projects/${id}`, data);
export const deleteProject = (id) => axios.delete(`/api/projects/${id}`);

export const addExperience = (data) => axios.post(`/api/experience`, data);
export const updateExperience = (id, data) => axios.put(`/api/experience/${id}`, data);
export const deleteExperience = (id) => axios.delete(`/api/experience/${id}`);