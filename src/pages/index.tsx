import * as React from "react"
import { Layout } from '../components/layout';
import Head from '../components/head';
import { HomepageBanner } from '../components/banner';
import { Slides } from "../components/activity";
import { Grid } from "../components/reports";
import { Heads } from "../components/team";

export default () => {

	return (
		<Layout>
			<Head title="Home" />
			<HomepageBanner />
			<Slides />
			<Grid />
			<Heads />
		</Layout>
	);
}
