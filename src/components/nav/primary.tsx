import React, { useState } from 'react';
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
	Collapse,

	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

import Logo from '../logo';


export default () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href='/'>
				<Logo />
			</NavbarBrand>

			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav navbar>
					<NavItem>

					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

