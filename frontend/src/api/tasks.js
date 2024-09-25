import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
};

export const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`${API_URL}/tasks/${id}`, updatedTask);
    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/tasks/${id}`);
};
