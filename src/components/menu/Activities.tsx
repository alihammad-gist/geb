import React from 'react';
import { activities } from './navs-data';

import { FooterNav } from '../nav';

export default () => {
	return (
		<FooterNav 
			navigation={ activities } 
			label="ACTIVITIES"
		/>
	);
}
