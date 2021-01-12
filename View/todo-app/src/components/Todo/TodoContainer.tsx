import React, {useEffect, useState} from 'react';
import {TodoList} from "./TodoList";
import {TodoItemForm} from "./TodoItemForm";
import {makeStyles} from "@material-ui/core";
import {getAllTasks} from "../../api/tasks";
import {Task} from "../../types/Task";

const useStyles = makeStyles(() => ({
  container: {
    padding: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

type TodoContainerProps = {

}

export const TodoContainer: React.FC<TodoContainerProps> = (props) => {
  const styles = useStyles()

  const [tasks, setTasks] = useState<Task[]>([])

  const updateTasks = () => {
    getAllTasks().then(response => {
      setTasks(response.data)
    })
  }

  useEffect(updateTasks, [])

  return (
    <div className={styles.container}>
      <h1>Заметки</h1>
      <TodoItemForm onAdd={updateTasks}/>
      <TodoList tasks={tasks} onTaskComplete={updateTasks} onTaskDelete={updateTasks}/>
    </div>
  )
}