import React from 'react';
import * as FA from 'react-icons/fa';

import './Icons.scss';

export default () => {
	return (
		<div className='social-media-icons'>
			<a href="#"><FA.FaFacebook /></a>
			<a href="#"><FA.FaTwitter className="ml-4" /></a>
			<a href="#"><FA.FaYoutube className="ml-4" /></a>
		</div>
	);
}
