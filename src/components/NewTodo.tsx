import React, { useRef } from 'react'

interface NewTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value
      props.onAddTodo(enteredText)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo
