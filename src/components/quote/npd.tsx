import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SingleQuote } from '.';
import { SingleRes } from './query';

export default () => {

    const data = useStaticQuery(graphql`
        query npdQuote {
            strapiQuote(team_member: {name: {eq: "Ms. Naheed Shah Durrani"}}) {
                message
                team_member {
                    job_desc
                    job_title
                    name
                    Image {
                        caption
                        file {
                            publicURL
                        }
                    }
                }
            }
        }
    `) as SingleRes;

    return (
        <SingleQuote
            quote={data.strapiQuote}
            title="Message from National Project Director"
        />
    );
}