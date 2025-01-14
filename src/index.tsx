import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import React from "react";
// import {createRoot} from "react-dom/client";
import {render} from "react-dom";

const root = document.getElementById('root')

// const container = document.getElementById('root');
// const root = createRoot(container)

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>, root
)
