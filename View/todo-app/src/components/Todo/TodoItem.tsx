import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {TaskStatus} from "../../types/TaskStatus";
import {TodoItemCard} from "./TodoItemCard";
import {Checkbox} from "@material-ui/core";
import {completeTask, removeTask} from "../../api/tasks";
import { Delete } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
  },
  checkboxSecondary: {
    color: 'rgba(255, 255, 255, 0.4)'
  },
  checkedCheckbox: {
    color: '#949e85'
  },
  deleteButton: {
    cursor: 'pointer'
  }
}));

type TodoItemProps = {
  id: number
  title: string
  description?: string
  status: TaskStatus
  onComplete: () => void
  onDelete: () => void
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const styles = useStyles()

  const handleTaskCompletion = async () => {
    await completeTask(props.id)
    props.onComplete()
  }

  const handleTaskDeletion = async () => {
    await removeTask(props.id)
    props.onDelete()
  }

  const containerClasses = [styles.card]
  if(props.status === TaskStatus.ACTIVE)
    containerClasses.push(styles.active)
  else if(props.status === TaskStatus.DONE)
    containerClasses.push(styles.done)

  return (
    <TodoItemCard className={containerClasses.join(' ')}>
      <div>
        <span className={styles.title}>{props.title}</span>
        { props.description && <span className={styles.description}>{props.description}</span> }
      </div>
      {props.status === TaskStatus.ACTIVE && <Checkbox onClick={handleTaskCompletion} color='default'/>}
      <Delete htmlColor='#d63e3e' className={styles.deleteButton} onClick={handleTaskDeletion}/>
    </TodoItemCard>
  )
}