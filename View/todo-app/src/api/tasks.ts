import {CreateTaskDto} from "../types/CreateTaskDto";
import { api } from "./axios";

const BASE_URL = '/tasks';

export const getAllTasks = () => {
  return api.get(`${BASE_URL}/byStatus`)
}

export const addTask = (taskDto: CreateTaskDto) => {
  return api.post(`${BASE_URL}/`, taskDto)
}

export const completeTask = (taskId: number) => {
  return api.patch(`${BASE_URL}/${taskId}/done`)
}

export const removeTask = (taskId: number) => {
  return api.delete(`${BASE_URL}/${taskId}`)
}