import React, { HTMLProps } from 'react';
import {
	// Nav components
	NavProps,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import Dropdown from './HoverableDropdown';

export type ActivePath = string[];

export type NavigationItem = {
	name: string
	href: string,
	label: string,
	children?:NavigationItem[],
}

type Props = {
	navigation: NavigationItem[],
	activePath?: string[],
	navProps?: NavProps
};

export default function ({ navigation, activePath=[], navProps}: Props)  {	
	let activeItem: string = '';
	if (activePath.length) {
		activeItem = activePath[0];
	}

	return (
		React.createElement(Nav, navProps, navigation.map(item => {

			if(typeof item.children === 'undefined') {
				return (
					<NavItem active={activeItem === item.name}>
						<NavLink href={item.href}>
							{item.label}
						</NavLink>
					</NavItem>
				);
			}

			return (
				<Dropdown 
					item={item} 
					activePath={activePath} 
					dropdownProps={{nav: true, inNavbar: true}}
					dropdownToggleProps={{nav: true, caret: true}}
				/>
			);

		}))
	);
}

