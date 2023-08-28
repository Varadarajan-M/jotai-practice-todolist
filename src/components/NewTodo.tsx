import { useAtom } from 'jotai';
import { memo } from 'react';

import { addTodoAtom, newTodoAtom } from '../jotai/todo/store';

const NewTodo = () => {
	const [newTodo, setNewTodo] = useAtom(newTodoAtom);
	const [, addTodo] = useAtom(addTodoAtom);

	const handleAddTodo = () => {
		if (!newTodo) return;
		addTodo();
	};

	const isButtonDisabled = newTodo?.trim()?.length <= 0;

	return (
		<div className='new-todo'>
			<input
				type='text'
				className='new-todo__input'
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button
				className='new-todo__submit'
				onClick={handleAddTodo}
				disabled={isButtonDisabled}
			>
				Add
			</button>
		</div>
	);
};

export default memo(NewTodo);
