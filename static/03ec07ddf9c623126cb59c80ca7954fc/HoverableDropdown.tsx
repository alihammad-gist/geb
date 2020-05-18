import React, { useState, useRef } from 'react';
import { useMedia } from 'react-media-match';

import { NavigationItem, ActivePath } from './index';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownProps, DropdownToggleProps, DropdownMenuProps, DropdownItem } from 'reactstrap';

import './HoverableDropdown.scss';
import { Link } from 'gatsby';

type Props = {
	item: NavigationItem
	activePath: ActivePath
	dropdownProps?: DropdownProps
	dropdownToggleProps?: DropdownToggleProps
	dropdownMenuProps?: DropdownMenuProps
}

enum DropdownState {
	Opened,
	Closing,
	Closed,
}

export default ({
	item,
	activePath = [],
	dropdownProps = {},
	dropdownToggleProps = { caret: true },
	dropdownMenuProps = {}
}: Props) => {

	const activeLink = activePath[0] || null;
	const activeSublink = activePath[1] || null;
	const children: NavigationItem[] = item === 'separator' ? [] : item.children || [];

	const [state, setState] = useState(DropdownState.Closed);
	const timeoutID = useRef<number>(-1); // setTimeout returns only positive ID


	const open = () => {
		clearTimeout(timeoutID.current);
		setState(DropdownState.Opened);
	}

	const close = () => {
		setState(DropdownState.Closing);
		timeoutID.current = setTimeout(() => {
			setState(DropdownState.Closed);
		}, 500) as unknown as number;
	}

	const toggle = () => {
		console.log('toggle called');
		if (state === DropdownState.Opened) {
			setState(DropdownState.Closed);
		} else {
			setState(DropdownState.Opened);
		}
	}

	const interaction = useMedia<DropdownProps>({
		tablet: {
			toggle: toggle,
			onMouseOver: () => { },
			onMouseOut: () => { },
		},
		mobile: {
			toggle: toggle,
			onMouseOver: () => { },
			onMouseOut: () => { },
		},
		desktop: {
			toggle: () => false,
			onMouseOver: open,
			onMouseOut: close,
			onBlur: close,
			onFocus: open,
		},
	});

	if (item == 'separator')
		return null;

	return (
		<Dropdown
			{...dropdownProps}
			// active={activeLink === item.name}
			isOpen={state !== DropdownState.Closed}


			// Mouse and keyboard interactions
			{...interaction}

			className={
				dropdownProps.className ?
					`${dropdownProps.className} hoverable-menu` : 'hoverable-menu'
			}
		>
			<DropdownToggle
				// Mouse click state cycle
				{...dropdownToggleProps}
				tag={Link}
				to={item.href}
				activeClassName="active"
				partiallyActive={true}
				onClick={(e) => e.preventDefault()}
			>
				{item.label}
			</DropdownToggle>
			<DropdownMenu
				{...dropdownMenuProps}
				className={
					(
						state === DropdownState.Closing ?
							'shadow closing' :
							state === DropdownState.Opened ?
								'shadow opened' : ''
					)
				}
			>
				{children.map((i, idx) =>
					i === 'separator' ?
						<DropdownItem divider key={idx} /> :
						<DropdownItem
							tag={Link}
							to={i.href}
							key={idx}
							activeClassName="active"
							partiallyActive={true}
						>
							{i.label}
						</DropdownItem>
				)}
			</DropdownMenu>
		</Dropdown>
	);

}
