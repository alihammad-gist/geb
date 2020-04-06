import React, { HTMLAttributes } from 'react';
import {
	// Nav components
	NavProps,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import Dropdown from './HoverableDropdown';
import { Link } from 'gatsby';

export type ActivePath = string[];

export type NavigationItem = {
	name: string
	href: string,
	label: string,
	children?: NavigationItem[],
} | 'separator';

export type Props = {
	navigation: NavigationItem[],
	activePath?: string[],
	navProps?: NavProps
} & HTMLAttributes<any>;

export default function (props: Props) {
	const {
		navigation,
		activePath = [],
		navProps,
		...htmlAttribs
	} = props;

	let activeItem: string = '';
	if (activePath.length) {
		activeItem = activePath[0];
	}

	return (
		React.createElement(Nav, { ...navProps, ...htmlAttribs }, navigation.map(item => {
			if (item === 'separator')
				return null;

			if (typeof item.children === 'undefined') {
				return (
					<NavItem key={item.name}>
						<NavLink tag={Link} to={item.href} activeClassName="gatsby-active">
							{item.label}
						</NavLink>
					</NavItem>
				);
			}

			return (
				<Dropdown
					item={item}
					activePath={activePath}
					dropdownProps={{ nav: true, inNavbar: true }}
					dropdownToggleProps={{ nav: true, caret: true }}
					key={item.name}
				/>
			);

		}))
	);
}

