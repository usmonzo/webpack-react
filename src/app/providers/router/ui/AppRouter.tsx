import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
	return (
		<Suspense fallback='<>...Loading</>'>
			<Routes>
				{/* Первый способ
				<Route path='/' element={<MainPage />} />
				<Route path='/about' element={<AboutPage />} />
				*/}

				{/* Второй способ
				создаем массив из роутов при помощи Object.values пробегаясь по нему создаем список роутов
				*/}
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={
							<div className='page-wrapper'>
								{element}
							</div>
						}
					/>
				))}
			</Routes>
		</Suspense>
	)
}

export default AppRouter
