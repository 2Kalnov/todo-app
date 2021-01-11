import React from 'react'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: '8px',
    padding: '10px 20px',
    '&:not(:first-of-type)': {
      marginTop: '14px'
    },
    maxWidth: '40%'
  },
}))

type TodoItemCardProps = {
  className: string
}


export const TodoItemCard: React.FC<TodoItemCardProps> = (props) => {
  const styles = useStyles()

  const { className, ...otherProps } = props
  const classes = [styles.container]
  if(className)
    classes.push(className)

  return <div className={classes.join(' ')} >{props.children}</div>
}