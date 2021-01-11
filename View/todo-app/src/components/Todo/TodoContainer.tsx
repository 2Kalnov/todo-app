import React from 'react';
import {TodoList} from "./TodoList";
import {TodoItemForm} from "./TodoItemForm";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    padding: '10px 30px'
  }
}))

type TodoContainerProps = {

}

export const TodoContainer: React.FC<TodoContainerProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <h1>Заметки</h1>
      <TodoItemForm/>
      <TodoList/>
    </div>
  )
}