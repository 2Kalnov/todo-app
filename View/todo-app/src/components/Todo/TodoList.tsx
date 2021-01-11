import React, {useEffect, useState} from 'react';
import {getAllTasks} from "../../tasks";
import {Task} from "../../types/Task";
import {TodoItem} from "./TodoItem";

type TodoListProps = {

}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getAllTasks().then(response => {
      response.json().then(tasks => setTasks(tasks))
    })
  }, [])

  return (
    <div>
      {
        tasks.map((task: Task) => {
          return <TodoItem title={task.title} description={task.description} status={task.status} />
        })
      }
    </div>
  )

}