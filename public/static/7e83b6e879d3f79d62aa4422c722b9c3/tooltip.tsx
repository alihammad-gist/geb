import React, { useState } from 'react';
import { Tooltip, UncontrolledTooltipProps } from 'reactstrap';

type props = Partial<UncontrolledTooltipProps> & {
    target: string | HTMLElement
}

export default (props: props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Tooltip
            placement="auto"
            toggle={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
            {...props}
        />
    );
}