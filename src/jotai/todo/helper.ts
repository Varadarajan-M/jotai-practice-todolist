import { Todo } from "./todostore";
import { sleep } from "../../util";
import todos from "../../todo";

export const addTodo = (todos: Todo[], todo: Todo) => {
  return [todo, ...todos];
};

export const deleteTodo = (todos: Todo[], id: string) =>
  todos.filter((t) => t.id !== id);

export const updateTodo = (
  todos: Todo[],
  id: Todo["id"],
  title: Todo["title"]
) => todos.map((t) => (t.id === id ? { ...t, title } : t));

export const toggleTodoStatus = (todos: Todo[], id: string) =>
  todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));

export const loadTodos = async () => {
  await sleep(2000);
  return todos;
};
