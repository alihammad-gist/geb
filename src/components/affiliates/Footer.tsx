import React from 'react';

const pakEmblem = require('./images/pak-emblem-white.png');
const undp = require('./images/undp-logo-30.svg');
const gef = require('./images/gef-white.png');

import './Footer.scss';

export default () => {
	return (
		<div className='container affiliates-footer'>
			{ /* Left floated Logos */ }
			<img src={pakEmblem} className="float-left"/>
			
			{ /* Right floated Logos */ }
			<img src={gef} className="float-right ml-3"/>
			<img src={undp} className="float-right ml-3" />
		</div>
	);
}
