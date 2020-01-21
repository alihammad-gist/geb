declare type ActivePath = string[];

declare type Navigation = {
	href: string,
	label: string,
	children?: Navigation[],
}
