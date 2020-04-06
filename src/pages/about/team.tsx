import React from 'react';
import { Layout } from '../../components/layout';
import Head from '../../components/head';
import { TeamExplorer, Heads, MemberMediaType } from '../../components/team';

export default () => (
    <Layout>
        <Head title="Team" />
        <Heads typ={MemberMediaType.Horizontal} />
    </Layout>
)