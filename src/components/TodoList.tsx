import { useAtom } from "jotai";

import Todo from "./Todo";
import NewTodo from "./NewTodo";
import EmptyTodoMessage from "./EmptyTodoMessage";

import { todoListAtom } from "../jotai/todo/store";

const TodoList = () => {
  const [todos] = useAtom(todoListAtom);
  return (
    <section className="todo-list">
      <h2 className="todo-list__header">TodoList</h2>
      <NewTodo />
      <div className="todo-list__items">
        {!todos.length ? (
          <EmptyTodoMessage />
        ) : (
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        )}
      </div>
    </section>
  );
};

export default TodoList;
