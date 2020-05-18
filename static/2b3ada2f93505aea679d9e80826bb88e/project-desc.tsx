import * as React from "react";
import Head from '../../components/head';
import { Layout } from '../../components/layout';
import { ProjectDocumentation } from "../../components/project-description";

export default () => {


	return (
		<Layout>
			<Head title="Home" />
			<ProjectDocumentation />
		</Layout>
	);
}
