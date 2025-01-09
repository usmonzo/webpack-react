import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './theme/ThemeProvider'
import App from './App'

const root = document.getElementById('root')

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	root
)
