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

export const TodoItemCard: React.FC<{}> = (props) => {
  const styles = useStyles()

  return <div className={styles.container}>{props.children}</div>
}