import React from 'react';
import rehypeReact from 'rehype-react';
import Counter from './components/image';

const renderer = new rehypeReact({
	createElement: React.createElement,
	components: {
		'interactive-counter': Counter,
	},
}).Compiler;

export default renderer


