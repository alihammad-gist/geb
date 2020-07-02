import React, { useState } from 'react';

export default ({starts_at = "0"}) => {
	const [counter, setCounter] = useState(Number(starts_at));

	function increment() {
		setCounter(counter + 1);
	}

	function decrement() {
		setCounter(counter - 1);
	}

	return (
		<div>
			<button
				onClick={increment}>
				+
			</button>
			<span>{counter}</span>
			<button
				onClick={decrement}>
				-	
			</button>
		</div>
	);
}
