import { useTheme } from 'app/providers/ThemeProvider'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>theme</button>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<AppRouter />
		</div>
	)
}

export default App
