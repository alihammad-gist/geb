import * as React from 'react';
import { Link } from 'gatsby';
import Footer from './footer';
import {
	UncontrolledDropdown,

	Collapse,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';



export default (props: React.HTMLProps<any>) => {
	return (
		<div {...props}>
			<Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler/>
        <Collapse isOpen={true} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>	

			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/blog'>Blog</Link></li>
				<li><Link to='/about-us'>About Us</Link></li>
			</ul>
			{ props.children }	
			<Footer />	
		</div>
	);
}
