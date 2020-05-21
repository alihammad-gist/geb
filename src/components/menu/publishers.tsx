import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'gatsby';
import { readableLink } from '../text/links';

export default ({ publishers }: { publishers: NewsPublisher[] }) => {
    return (
        <>
            <p className='mb-0 p-2 text-uppercase border-top border-bottom'>News Publishers</p>
            <Nav vertical className='sub-nav mt-0'>
                <NavItem key='all-publishers' className="mb-2">
                    <NavLink
                        tag={Link}
                        to='/media/coverage'
                        activeClassName="active"
                    >
                        All News Publishers
                    </NavLink>
                </NavItem>
                {publishers.map((publisher, idx) => {
                    return (
                        <NavItem key={idx}>
                            <NavLink
                                tag={Link}
                                to={`/media/coverage/${readableLink(publisher.name)}`}
                                activeClassName="active"
                            >
                                {publisher.name}
                            </NavLink>
                        </NavItem>
                    );
                })}
            </Nav>
        </>
    );
}