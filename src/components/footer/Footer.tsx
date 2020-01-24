import * as React from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';

import { Footer as FooterAffiliates } from '../affiliates';
import { 
	General as GeneralNav,
	Activities as ActivitiesNav
} from '../menu';
import { FooterIcons } from '../social-media';


import './Footer.scss';

export default () => {
	return (
		<footer className="footer">
			<FooterAffiliates />
			<Container className="pt-4">
				<Row>
					<Col md="3"><GeneralNav /></Col>
					<Col md="3"><ActivitiesNav /></Col>
					<Col md="3" className="ml-auto">
						<FooterIcons />	
					</Col>
				</Row>
			</Container>
			<p>Created by Ali Hammad, © 2020</p>
		</footer>
	)
}
