const BASE_URL = 'localhost:3000';

export const getAllTasks = () => {
  return fetch(`${BASE_URL}/`, {
    method: 'GET'
  })
}