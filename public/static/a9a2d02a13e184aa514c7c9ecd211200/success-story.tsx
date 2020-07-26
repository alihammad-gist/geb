import React from 'react';
import { Jumbotron } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { SingularResult } from 'ProjectDescriptionExcerpt';
import ScrollAnimation from 'react-animate-on-scroll';
const image = require('./images/info-graphic.jpg');

export default () => {

  const data = useStaticQuery(graphql`
query SuccessStoryBanner {
  strapiProjectDescription {
    outcomes {
      slider_background {
        publicURL
      }
    }
  }
}
    `) as SingularResult;

  return (
    <Jumbotron
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${image})`,
        padding: '8rem 0',
        backgroundPosition: 'center',
      }}
    >
      <div className='text-center'>
        <ScrollAnimation animateIn='fadeInDown' animateOnce={true}>
          <h1 className='d-inline-block text-white border-bottom'>Success Story</h1>
        </ScrollAnimation>
      </div>
    </Jumbotron>
  );
}
