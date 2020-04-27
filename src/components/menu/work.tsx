import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'gatsby';

export default () => {
    return (
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
                    to="/work/extrn-publications"
                    activeClassName="active"
                    partiallyActive
                >Important Publications</NavLink>
            </NavItem>
        </Nav>
    );
}