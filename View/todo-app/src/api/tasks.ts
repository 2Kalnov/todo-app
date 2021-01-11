import {CreateTaskDto} from "../types/CreateTaskDto";

const BASE_URL = 'http://localhost:8080/tasks';

export const getAllTasks = () => {
  return fetch(`${BASE_URL}/byStatus`, {
    method: 'GET'
  })
}

export const addTask = (taskDto: CreateTaskDto) => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(taskDto)
  })
}