import React from 'react';
import { general } from './navs-data';

import { FooterNav } from '../nav';

export default () => {
	return (
		<FooterNav 
			navigation={general} 
			label="GENERAL"
		/>
	);
}
