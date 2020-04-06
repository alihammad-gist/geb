import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Container,
} from 'reactstrap';

import Logo from '../logo';
import { Nav as NavGen } from '../nav';
import { primary as data } from './navs-data';
import * as styles from './styles.module.scss';


export default () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);


	return (
		<Navbar light expand="md" className={`${styles.primary} shadow`}>
			<Container className={styles.topBar}>
				<NavbarBrand href='/' >
					<Logo />
				</NavbarBrand>

				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar className={styles.menuContainer}>
					<NavGen
						activePath={["home"]}
						navigation={data}
						navProps={{ navbar: true }}
					/>
				</Collapse>
			</Container>
		</Navbar>
	);
}

