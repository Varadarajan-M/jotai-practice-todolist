import { useAtom } from 'jotai';
import { useEffect } from 'react';

import TopBar from './TopBar';
import TodoList from './TodoList';

import { themeAtom } from '../jotai/theme/store';

import '../styles.css';

export default function App() {
	const [theme] = useAtom(themeAtom);

	useEffect(() => {
		const root = document.getElementById('root')!;
		root.className = theme;
	}, [theme]);

	return (
		<div className={`app ${theme}`}>
			<TopBar />
			<TodoList />
		</div>
	);
}
