import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default ({ src, alt }: { src: string, alt: string }) => {
  return (
    <StaticQuery
      query={graphql`
query {
  allFile {
    nodes {
      name
      publicURL
    }
  }
}
              `}
      render={images => (
        <div className='text-center my-2'>
          <figure className="figure">
            <img
              src={images.allFile.nodes.find(((n: any) => baseName(src) === n.name)).publicURL}
              alt={alt}
              className="figure-img img-fluid rounded" />
            <figcaption className="figure-caption text-right border-bottom">{alt}</figcaption>
          </figure>
        </div>
      )}
    />
  )
}

function baseName(str: string): string {
  var base = new String(str).substring(str.lastIndexOf('/') + 1);
  if (base.lastIndexOf(".") != -1)
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}