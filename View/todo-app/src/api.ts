const BASE_URL = 'localhost:8080';

export const getAllTasks = () => {
  return fetch(`${BASE_URL}/`, {
    method: 'GET'
  })
}