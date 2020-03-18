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
		<Navbar light expand="md" className={styles.primary}>
			<Container>
				<NavbarBrand href='/' className="d-md-none">
					<Logo />
				</NavbarBrand>

				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar className={styles.menuContainer}>
					<NavGen
						activePath={["home"]}
						navigation={data.slice(0, 3)}
						navProps={{ navbar: true }}
						className={`${styles.menus} ${styles.menuLeft}`}
					/>
					<div className={`d-none d-md-block d-lg-block ${styles.logo}`}>
						<Logo />
					</div>
					<NavGen
						activePath={["home"]}
						navigation={data.slice(3, 6)}
						navProps={{ navbar: true }}
						className={`${styles.menus} ${styles.menuRight}`}
					/>
				</Collapse>
			</Container>
		</Navbar>
	);
}

