import React from 'react';
import { 
	default as Nav,
	Props as NavProps,
} from './Nav';

import './FooterNav.scss';

type Props = {
	label: string
} & NavProps; 

export default (p: Props) => {
	return (
		<div className='footer-nav'>
			<h6 className='footer-nav-label'>{ p.label }</h6>
			<Nav { ...p } navProps={{
				vertical: true,
			}} />	
		</div>
	);	
}
