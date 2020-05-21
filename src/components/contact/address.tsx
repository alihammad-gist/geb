import React from 'react';
import { FaBuilding, FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import { Media } from 'reactstrap';

export default () => {
    return (
        <>
            <h3 className="mt-3">Address</h3>
            <Media tag="address">
                <Media
                    left
                    className="text-muted"
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'

                    }}
                >
                    <FaBuilding />
                </Media>
                <Media body>
                    <p className="mb-0">
                        Project Management Unit (PMU), UNDP’s GEB Project
                    </p>
                    <p className="mb-0">
                        Building No. 301, Street No. 87, E 11/ 2
                    </p>
                    <p className="mb-0">
                        Islamabad
                    </p>
                </Media>
            </Media>
            <Media className="mt-2" style={{
            }}>
                <Media
                    left
                    className="text-muted"
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem',
                        lineHeight: '1.2',
                    }}
                >
                    <FaPhoneSquare />
                </Media>
                <Media body className="align-self-center">
                    <a href="tel:+92518319161">
                        (051) 8319161
                    </a>
                </Media>
            </Media>
            <Media className="mt-2" style={{
            }}>
                <Media
                    left
                    className="text-muted"
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'

                    }}
                >
                    <FaEnvelope />
                </Media>
                <Media body className="align-self-center">
                    <a href="mailto:gebundp@gmail.com">
                        gebundp@gmail.com
                    </a>
                </Media>
            </Media>
        </>
    );
}