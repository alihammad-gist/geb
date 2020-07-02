import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

export default () => {
    return (
        <ScrollAnimation animateIn='fadeInLeft' animateOnce>
            <Nav vertical className="sub-nav sticky-top">
                <NavItem>
                    <NavLink
                        tag={Link}
                        to="/work/reports"
                        activeClassName="active"
                        partiallyActive
                    >Reports</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        tag={Link}
                        to="/work/success-story"
                        activeClassName="active"
                        partiallyActive
                    >Success Story</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        tag={Link}
                        to="/work/extrn-publications"
                        activeClassName="active"
                        partiallyActive
                    >Important Publications</NavLink>
                </NavItem>
            </Nav>
        </ScrollAnimation>
    );
}