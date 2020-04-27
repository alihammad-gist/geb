import React from 'react';
import { Media } from 'reactstrap';
import { Outcome } from 'ProjectDescriptionExcerpt';


export default ({ outcome, num }: { outcome: Outcome, num: number }) => {
    return (
        <li style={{ listStyle: "none" }} className="mb-4">
            <Media>
                <Media left className="mr-2">
                    <h4>
                        <small>Outcome {num}: </small>
                    </h4>
                </Media>
                <Media body>
                    <h4>

                        {outcome.title}
                    </h4>
                </Media>
            </Media>
            {/* <h4>
                <small>Outcome {num}: </small>
                {outcome.title}
            </h4> */}
            <p>
                <img
                    src={outcome.cover.publicURL}
                    className="img-fluid float-left img-thumbnail mr-2 mb-2 rounded-0"
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