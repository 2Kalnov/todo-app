import React, {useEffect, useState} from 'react';
import {getAllTasks} from "../../api/tasks";
import {Task} from "../../types/Task";
import {TodoItem} from "./TodoItem";
import {makeStyles} from "@material-ui/core";

type TodoListProps = {
  tasks: Task[]
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      {
        props.tasks.map((task: Task) => {
          return <TodoItem title={task.title} description={task.description} status={task.status} />
        })
      }
    </div>
  )

}