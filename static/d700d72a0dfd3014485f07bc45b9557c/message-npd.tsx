import React from 'react';
import Head from '../../components/head';
import { Layout } from '../../components/layout';
import { QuoteNPD } from '../../components/quote';

export default () => {


    return (
        <Layout>
            <Head title="Message from NPD"></Head>
            <QuoteNPD />
        </Layout>
    );
}