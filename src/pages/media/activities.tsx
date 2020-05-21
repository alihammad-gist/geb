import React from 'react';
import { Layout } from '../../components/layout';
import Head from '../../components/head';
import { ActivitiesTimeline } from '../../components/activity/timeline';

export default () => {
    return (
        <Layout>
            <Head title="Activities" />
            <ActivitiesTimeline />
        </Layout>
    );
}