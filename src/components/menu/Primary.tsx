import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Container,
} from 'reactstrap';

import Logo from '../logo';
import { Nav as NavGen }from '../nav';
import './Primary.scss';
import { primary as data } from './navs-data';


export default () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);


	return (
		<Navbar color="light" light expand="md">
			<Container className="d-flex align-items-end">
				<NavbarBrand href='/'>
					<Logo />
				</NavbarBrand>

				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar className="justify-content-end">
					<NavGen 
						activePath={["home"]}
						navigation={data}
						navProps={{navbar: true}}
					/>	
				</Collapse>
			</Container>
		</Navbar>
	);
}

