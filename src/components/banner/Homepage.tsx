import React, { useState } from 'react';

import { CarouselItem, Carousel, CarouselControl } from 'reactstrap';
import { OutcomeSlide } from '../project-description';
import { useStaticQuery, graphql } from 'gatsby';
import { QueryResult } from 'ProjectDescriptionExcerpt';

import './styles.scss';



export default () => {

	const data = useStaticQuery(graphql`
		query ProjectDescriptExcerpt {
			allStrapiProjectDescription {
				edges {
					node {
						outcomes {
							title
							body
							cover {
								id
								publicURL
								size
								ext
							}
							slider_background {
								id
								publicURL
								size
								ext
							}
						}
					}
				}
			}
		}
	`) as QueryResult['data'];

	const outcomes = data.allStrapiProjectDescription.edges[0].node.outcomes;


	const [activeIdx, setActiveIdx] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;

		setActiveIdx(
			activeIdx < outcomes.length - 1 ? activeIdx + 1 : 0 // <- first index
		);
	}

	const prev = () => {
		if (animating) return;

		setActiveIdx(
			activeIdx > 0 ? activeIdx - 1 : outcomes.length - 1 // <- last index
		)
	}


	const slides = outcomes.map((outcome, idx) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={idx}
			>
				<OutcomeSlide outcome={outcome} />
			</CarouselItem>
		);
	});

	return (
		<Carousel
			activeIndex={activeIdx}
			next={next}
			previous={prev}
			pause={false}
			interval={7000}
			className="carousel-fade outcomes-slider"
		>

			{/* slides */}
			{slides}

			{/* left control (previous) */}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={prev}
			/>

			{/* Right control (next)  */}
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>

		</Carousel>
	);
}

