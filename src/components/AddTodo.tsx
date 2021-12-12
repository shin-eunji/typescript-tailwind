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
  <form className={`flex justify-between w-full`} onSubmit={handleSubmitTodo}>
    <input type="text"
           name="task"
           className={"flex-1 rounded shadow p-2 text-gray-dark mr-2"}
           value={task}
           onChange={handleChange}
    />
    <button>+</button>
  </form>
)