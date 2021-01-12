import {CreateTaskDto} from "../types/CreateTaskDto";
import { api } from "./axios";
import {AxiosPromise, AxiosResponse} from "axios";
import {Task} from "../types/Task";

const BASE_URL = '/tasks';

export const getAllTasks = (): AxiosPromise<Task[]> => {
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