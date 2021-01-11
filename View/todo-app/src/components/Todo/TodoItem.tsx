import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {TaskStatus} from "../../types/TaskStatus";
import {TodoItemCard} from "./TodoItemCard";
import {Checkbox} from "@material-ui/core";
import {completeTask} from "../../api/tasks";

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex'
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
  }
}));

type TodoItemProps = {
  id: number
  title: string
  description?: string
  status: TaskStatus
  onComplete: () => void
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const styles = useStyles()

  const handleTaskCompletion = async () => {
    await completeTask(props.id)
    props.onComplete()
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
      <Checkbox onClick={handleTaskCompletion}/>
    </TodoItemCard>
  )
}