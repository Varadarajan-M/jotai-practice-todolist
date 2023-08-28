import { atom } from 'jotai';

import { generateId } from '../../util';
import {
	addTodo,
	deleteTodo,
	loadTodos,
	toggleTodoStatus,
	updateTodo,
} from './helper';

export type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

const initialTodos = [
	{
		id: generateId(),
		title: 'Buy Shirts',
		completed: false,
	},
	{
		id: generateId(),
		title: 'Go to doctor',
		completed: true,
	},
	{
		id: generateId(),
		title: 'Learn Jotai',
		completed: false,
	},
];

export const todoListAtom = atom<Todo[]>(initialTodos);

export const newTodoAtom = atom<Todo['title']>('');

export const addTodoAtom = atom(null, (get, set) => {
	const newTodo = {
		id: generateId(),
		title: get(newTodoAtom),
		completed: false,
	};
	set(todoListAtom, addTodo(get(todoListAtom), newTodo));
	set(newTodoAtom, '');
});

export const updateTodoAtom = atom(null, (get, set, { id, title }) => {
	const updatedTodos = updateTodo(get(todoListAtom), id, title);
	set(todoListAtom, updatedTodos);
});

export const deleteTodoAtom = atom(null, (get, set, id: string) => {
	const updatedTodos = deleteTodo(get(todoListAtom), id);
	set(todoListAtom, updatedTodos);
});

export const toggleTodoStatusAtom = atom(null, (get, set, id: string) => {
	const updatedTodos = toggleTodoStatus(get(todoListAtom), id);
	set(todoListAtom, updatedTodos);
});

export const loadTodoAtom = atom(null, async (_, set) => {
	const todos = await loadTodos();
	set(todoListAtom, todos);
});
