import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'gatsby';

type link = {
    to: string
    label: string
}

type props = {
    links: link[]
}

export default ({ links }: props) => {
    return (
        <Nav vertical className="sub-nav sticky-top">
            {links.map(({ to, label }, idx) => (
                <NavItem key={idx}>
                    <NavLink
                        tag={Link}
                        to={to}
                        activeClassName="active"
                        partiallyActive
                    >{label}</NavLink>
                </NavItem>
            ))}
        </Nav>
    );
}