import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

type props = React.PropsWithChildren<{
    label?: string
}>;

/**
 * Contains meta informations about blogs/activities/.. 
 * eg, date, author, gallery, ...
 */
export default (p: props) => {
    return (
        <Card className="mt-3 mb-4" style={{ border: 'none' }}>
            <CardBody style={{ padding: 0 }}>
                {p.label && <CardTitle className='border-bottom text-muted'>{p.label}</CardTitle>}
                {p.children}
            </CardBody>
        </Card>
    );
}