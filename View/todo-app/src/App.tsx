import React from 'react'
import {TodoContainer} from "./components/Todo/TodoContainer";

type AppProps = {

}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
      <TodoContainer/>
  )
}



