import { memo } from 'react';

import ThemeSwitch from './ThemeSwitch';
import TodoLoad from './TodoLoad';

const TopBar = () => {
	return (
		<div className='topbar'>
			<ThemeSwitch />
			<TodoLoad />
		</div>
	);
};

export default memo(TopBar);
