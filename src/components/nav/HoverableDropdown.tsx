import React, { useState, useRef } from 'react';
import { NavigationItem, ActivePath } from '.';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownProps, DropdownToggleProps, DropdownMenuProps, DropdownItem } from 'reactstrap';

import './HoverableDropdown.scss';

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
	activePath=[], 
	dropdownProps={},
	dropdownToggleProps={ caret: true },
	dropdownMenuProps={}
}: Props) => {

	const activeLink = activePath[0] || null;	
	const activeSublink = activePath[1] || null;
	const children = item.children || [];

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

	return (
		<Dropdown 
			{...dropdownProps} 
			active={activeLink === item.name} 
			isOpen={state !== DropdownState.Closed}


			// Keyboard control pairs
			onFocus={open}
			onBlur={close}

			// Mouse over
			onMouseOver={open}
			onMouseOut={close}
			className={
				dropdownProps.className ? 
					`${dropdownProps.className} hoverable-menu` : 'hoverable-menu'
			}
		>
			<DropdownToggle 
				// Mouse click state cycle
				{...dropdownToggleProps}
			>
				{item.label}
			</DropdownToggle>
			<DropdownMenu 
				{...dropdownMenuProps}
				className={
					state === DropdownState.Closing ? 
						'closing' :
						state === DropdownState.Opened ?
							'opened' : ''
				}
			>
				{ children.map(
					i => 
					<DropdownItem href={i.href} active={activeSublink === i.name}>
						{i.label}	
					</DropdownItem>
				) }
			</DropdownMenu>
		</Dropdown>
	);	

}
