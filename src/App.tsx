import React from 'react'

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'TypeScript practice' }]
  const todoAddHandler = (text: string): void => {
    console.log(text)
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  )
}

export default App
