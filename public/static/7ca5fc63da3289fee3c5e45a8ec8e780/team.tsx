import React from 'react';
import { Layout } from '../../components/layout';
import Head from '../../components/head';
import { Subordinates, Heads, MemberMediaType, HeadsAlt } from '../../components/team';

export default () => (
    <Layout>
        <Head title="GEB Team" />
        <HeadsAlt />
        <Subordinates />
    </Layout>
)