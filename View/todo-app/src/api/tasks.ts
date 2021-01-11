const BASE_URL = 'http://localhost:8080/tasks';

export const getAllTasks = () => {
  return fetch(`${BASE_URL}/`, {
    method: 'GET'
  })
}