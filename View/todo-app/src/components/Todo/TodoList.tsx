import React, {useEffect, useState} from 'react';
import {getAllTasks} from "../../api/tasks";
import {Task} from "../../types/Task";
import {TodoItem} from "./TodoItem";
import {makeStyles} from "@material-ui/core";

type TodoListProps = {

}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getAllTasks().then(response => {
      setTasks(response.data)
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