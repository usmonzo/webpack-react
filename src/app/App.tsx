import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async'
import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>theme</button>
			<Link to={'/'}>Home</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback='<>...Loading</>'>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
