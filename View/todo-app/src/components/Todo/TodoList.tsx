import React, {useEffect, useState} from 'react';
import {getAllTasks} from "../../api/tasks";
import {Task} from "../../types/Task";
import {TodoItem} from "./TodoItem";
import {makeStyles} from "@material-ui/core";

type TodoListProps = {

}

const useStyles = makeStyles(() => ({
  list: {
    padding: "14px 24px"
  }
}))

export const TodoList: React.FC<TodoListProps> = (props) => {
  const [tasks, setTasks] = useState([])
  const styles = useStyles()

  useEffect(() => {
    getAllTasks().then(response => {
      response.json().then(tasks => setTasks(tasks))
    })
  }, [])

  return (
    <div className={styles.list}>
      {
        tasks.map((task: Task) => {
          return <TodoItem title={task.title} description={task.description} status={task.status} />
        })
      }
    </div>
  )

}