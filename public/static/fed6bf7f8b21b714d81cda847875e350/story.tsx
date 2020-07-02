import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SingleResult } from './query';
import { Section, SectionType } from '../layout';
import ReactMarkdown from 'react-markdown';
import { StoryContentImage } from '.';

export default () => {
  const data = useStaticQuery(graphql`
query SuccessStory {
  strapiSuccessStory {
    title
    description
  }
}
    `) as SingleResult;

  return (
    <Section type={SectionType.darkOverWhite}>
      <h3 className='mb-4'>{data.strapiSuccessStory.title}</h3>
      <ReactMarkdown
        className='text-justify'
        source={data.strapiSuccessStory.description}
        renderers={{
          image: StoryContentImage,
        }}
      />
    </Section>
  );

}

