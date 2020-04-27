import React from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';



export const items = {
    "background": "Background",
    "objectives": "Objectives",
    "results": "Outcomes",
    "locations": "Where we work?",
    "achievements": "Achievements - 2019",
    "next": "What's next?",
}


export type DocItem = keyof typeof items;

type props = {
    active: DocItem
    onChange: (i: DocItem) => void
}

export default ({ active, onChange }: props) => {

    const handleClick = (i: DocItem) => (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (active !== i) {
            onChange(i);
        }
    }

    return (
        <Nav vertical={true} className="sub-nav sticky-top">
            {Object.keys(items).map(k => {
                return (
                    <NavItem active={active === k} key={k}>
                        <NavLink href="#" onClick={handleClick(k as DocItem)}>
                            {items[k as DocItem]}
                        </NavLink>
                    </NavItem>
                )
            })}
        </Nav>
    );
}