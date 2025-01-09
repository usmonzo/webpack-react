import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	function increment() {
		setCount(count + 1)
	}
	function decrement() {
		setCount(count - 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment} className={classes.btn}>
				+
			</button>
			<button onClick={decrement} className={classes.btn}>
				-
			</button>
		</div>
	)
}
