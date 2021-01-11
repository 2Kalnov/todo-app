import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {TaskStatus} from "../../types/TaskStatus";
import {TodoItemCard} from "./TodoItemCard";

const useStyles = makeStyles(() => ({
  active: {
    backgroundColor: 'rgb(76, 194, 70)',
  },
  done: {
    backgroundColor: 'rgb(97, 91, 88)'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.6rem',
    color: 'rgba(255, 255, 255, 0.95)',
    display: 'block',
  },
  description: {
    fontSize: '1rem',
    display: 'block',
    marginTop: '14px',
    color: 'rgba(255, 255, 255, 0.95)',
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
    <TodoItemCard className={props.status === TaskStatus.ACTIVE ? styles.active : styles.done}>
      <span className={styles.title}>{props.title}</span>
      { props.description && <span className={styles.description}>{props.description}</span> }
    </TodoItemCard>
  )
}