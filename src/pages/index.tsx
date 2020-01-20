import * as React from "react"
import { useState } from 'react';
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head';

export default () => {

	const [isFocused, setFocus] = useState(false);

	return (
		<Layout>
			<Head title="Home" />
			<div
				onMouseOver={_ => setFocus(true)}
				onFocus={_ => setFocus(true)}
				onMouseOut={_ => setFocus(false)}
				onBlur={_ => setFocus(false)}
				role="button"
				tabIndex={0}
				style={{
					backgroundColor: isFocused ? "#ccc" : "transparent"
				}}
			>
				<h1>Hello world</h1>
				<Link to="/about-us">
					<img
						src="//source.unsplash.com/random/400x200"
						alt="Random" />
				</Link>
			</div>
		</Layout>
	);
}
