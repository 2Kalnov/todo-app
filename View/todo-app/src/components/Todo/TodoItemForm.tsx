import React, {useState} from 'react';
import {TodoItemCard} from "./TodoItemCard";
import {Button, makeStyles, TextField} from "@material-ui/core";
import {TodoContainer} from "./TodoContainer";
import {addTask} from "../../api/tasks";

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2.5rem',
    backgroundColor: '#eeeeee',
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  descriptionField: {
    marginTop: '14px'
  },
  addButton: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginTop: '14px',
    color: '#3f51b5'
  }
}))

type TodoItemFormProps = {
  onAdd: () => void
}

export const TodoItemForm: React.FC<TodoItemFormProps> = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const styles = useStyles()

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value)
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value)
  };

  const handleAddButtonClick = async () => {
    await addTask({
      title,
      description
    })
    setTitle('')
    setDescription('')

    props.onAdd()
  }

  return (
    <TodoItemCard className={styles.card}>
      <TextField label='Заголовок' value={title} onChange={handleTitleChange} variant='standard'/>
      <TextField
        label='Что надо сделать?'
        value={description}
        onChange={handleDescriptionChange}
        variant='standard'
        className={styles.descriptionField}
        multiline
        rows={3}
      />
      <Button className={styles.addButton} onClick={handleAddButtonClick}>Добавить</Button>
    </TodoItemCard>
  )
}