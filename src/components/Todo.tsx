import { useAtom } from "jotai";

import {
  deleteTodoAtom,
  Todo as TodoType,
  toggleTodoStatusAtom,
  updateTodoAtom
} from "../jotai/todo/store";

type TodoProps = {
  todo: TodoType;
};

const Todo = (props: TodoProps) => {
  const {
    todo: { id, title, completed }
  } = props;
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, toggleTodoStatus] = useAtom(toggleTodoStatusAtom);
  const [, deleteTodo] = useAtom(deleteTodoAtom);

  const todoClass = `todo ${completed ? "complete" : ""}`;

  return (
    <div className={todoClass}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoStatus(id)}
        className="todo__input todo__input--completion-status"
      />
      <input
        type="text"
        className="todo__input todo__input--title"
        value={title}
        onChange={(e) => updateTodo({ id, title: e.target.value })}
      />
      <button
        className="todo__btn todo__btn--delete"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
