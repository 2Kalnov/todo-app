import React from 'react'
import ReactDOM from 'react-dom'
import {TodoList} from "./components/Todo/TodoList";

type AppProps = {

}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
      <TodoList/>
  )
}



