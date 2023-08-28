import { useAtom } from 'jotai';
import { memo } from 'react';

import { themeAtom } from '../jotai/theme/store';

const ThemeSwitch = () => {
	const [theme, setTheme] = useAtom(themeAtom);

	const toggleTheme = () =>
		setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));

	return (
		<button onClick={toggleTheme}>
			Switch Theme : <span className='topbar__theme-switch'>{theme}</span>
		</button>
	);
};

export default memo(ThemeSwitch);
