import React, {useEffect, useState} from 'react';
import {getAllTasks} from "../../api/tasks";
import {Task} from "../../types/Task";
import {TodoItem} from "./TodoItem";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

type TodoListProps = {
  tasks: Task[]
  onTaskComplete: () => void
  onTaskDelete: () => void
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.list}>
      {
        props.tasks.map((task: Task) => {
          return (
            <TodoItem
              key={`${task.title}${task.createdAt}`}
              title={task.title}
              description={task.description}
              status={task.status}
              id={task.id}
              onComplete={props.onTaskComplete}
              onDelete={props.onTaskDelete}
            />
          )
        })
      }
    </div>
  )

}