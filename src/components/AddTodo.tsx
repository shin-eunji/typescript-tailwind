import { FormEvent, ChangeEvent } from "react";

export type AddTodoProps = {
  task: string
  handleChange: (e: ChangeEvent) => void
  handleSubmitTodo: (e: FormEvent) => void
}

export const AddTodo = ({
  task,
  handleChange,
  handleSubmitTodo
}: AddTodoProps) => (
  <form onSubmit={handleSubmitTodo}>
    <input type="text"
           name="task"
           value={task}
           onChange={handleChange}
    />
    <button>+</button>
  </form>
)