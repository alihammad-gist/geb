import React from 'react';
import { Layout } from '../../components/layout';
import Head from '../../components/head';
import { Subordinates, Heads, MemberMediaType } from '../../components/team';

export default () => (
    <Layout>
        <Head title="GEB Team" />
        <Heads
            typ={MemberMediaType.Vertical}
            shadow
            decoratedHeading
            mimicReportDesign
            centered
        />
        <Subordinates />
    </Layout>
)