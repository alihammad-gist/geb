import React, { useState } from 'react';

import { CarouselItem, Carousel, CarouselControl, Button } from 'reactstrap';
import { OutcomeSlide } from '../project-description';
import { useStaticQuery, graphql } from 'gatsby';
import { QueryResult } from 'ProjectDescriptionExcerpt';

import './styles.scss';
import { MdDescription, MdSubject, MdArrowForward } from 'react-icons/md';



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
		<div className="clearfix position-relative">
			<Carousel
				activeIndex={activeIdx}
				next={next}
				previous={prev}
				className="carousel-fade outcomes-slider"
				ride="carousel"
				interval={8900}
				pause={false}
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
			<div className='banner-cto'>
				<Button
					size="lg"
					color="primary"
					className="shadow"
				>
					Read Project Details
					<span className="svg-icon svg-baseline ml-2 arrow-forward-animate">
						<MdArrowForward />
					</span>
				</Button>
			</div>
		</div>
	);
}

