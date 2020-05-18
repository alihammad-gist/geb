import React from 'react';
import { graphql } from 'gatsby';
import { SingularResult } from '../query';
import { Layout } from '../../layout';
import Head from '../../head';
import Profile from '../profile';

export const query = graphql`
    query teamMember($slug: String!) {
        strapiTeamMember(
            fields: { 
            slug: {
                eq: $slug
            }
            }
        ) {
            name
            about
            job_desc
            job_title
            remarks
            Image {
                caption
                file {
                    publicURL
                }
            }
            phone
            email
            linkedIn
            twitter
        }
    }
`;

type props = {
    data: SingularResult
}

export default ({ data: { strapiTeamMember: member } }: props) => {
    return (
        <Layout>
            <Head title={member.name} />
            <Profile member={member} />
        </Layout>
    );
}