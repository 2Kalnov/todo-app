import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Checkbox } from '@material-ui/core'
import {TaskStatus} from "../../types/TaskStatus";

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: '10px',
    padding: '10px 20px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  description: {
    fontSize: '0.9rem'
  }
}));

type TodoItemProps = {
  title: string
  description?: string
  status: TaskStatus
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.title}</span>
      { props.description && <span className={styles.description}>{props.description}</span> }
    </div>
  )
}