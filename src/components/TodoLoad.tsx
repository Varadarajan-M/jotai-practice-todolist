import { useAtom } from "jotai";

import { loadTodoAtom } from "../jotai/todo/store";

const TodoLoad = () => {
  const [, loadTodo] = useAtom(loadTodoAtom);

  return (
    <button className="topbar__load-todo" onClick={loadTodo}>
      Load Todo
    </button>
  );
};

export default TodoLoad;
