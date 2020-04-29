import React from 'react';
import Head from '../../components/head';
import { Layout } from '../../components/layout';
import { QuoteNPC } from '../../components/quote';

export default () => {


    return (
        <Layout>
            <Head title="Message from NPC"></Head>
            <QuoteNPC />
        </Layout>
    );
}