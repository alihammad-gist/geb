import React from 'react';
import { Jumbotron } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { SingularResult } from 'ProjectDescriptionExcerpt';

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
        backgroundImage: `url(${data.strapiProjectDescription.outcomes[2].slider_background.publicURL})`,
        padding: '8rem 0',
        backgroundPosition: 'center',
      }}
    >
      <div className='text-center'>
        <h2 className='d-inline-block text-white border-bottom'>Success Story</h2>
      </div>
    </Jumbotron>
  );
}