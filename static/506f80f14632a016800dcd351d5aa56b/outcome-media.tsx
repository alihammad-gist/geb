import React from 'react';
import { Media } from 'reactstrap';
import { Outcome } from 'ProjectDescriptionExcerpt';


export default ({ outcome, num }: { outcome: Outcome, num: number }) => {
    return (
        <li style={{ listStyle: "none" }} className="mb-4">
            {/* <h4>
                <small>Outcome {num}: </small>
                {outcome.title}
            </h4> */}
            <h4>
                Outcome {num}: {outcome.title}
            </h4>
            <p className="text-justify">
                <img
                    src={outcome.cover.publicURL}
                    className="img-fluid float-right img-thumbnail ml-2 mb-2 rounded-0"
                    style={{ maxWidth: '160px', verticalAlign: 'top', }}
                />
                {outcome.body}
            </p>

            {/* <Media className="mb-5">
                <Media right className="mr-4">
                    <img
                        src={outcome.cover.publicURL}
                        className="img-fluid"
                        style={{ maxWidth: '180px' }}
                    />
                </Media>
                <Media body>
                    <p>{outcome.body}</p>
                </Media>
            </Media> */}
        </li>
    );
}