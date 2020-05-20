import React from 'react';
import { Layout, PostLayout, PostMeta } from '../../layout';
import Head from '../../head';
import { graphql } from 'gatsby';
import { SingleQueryResult } from '../query';
import ReactMarkdown from 'react-markdown';
import { AuthorMedia } from '../../team';
import { formateDate } from '../../text/formating';

export const postQuery = graphql`
query blogPostQuery($id: Int!) {
  strapiBlog(strapiId: {eq: $id}) {
    strapiId
    id
    title
    slug
    body
    cover {
      file {
        publicURL
      }
      caption
    }
    author {
      Image {
        file {
          publicURL
        }
        caption
      }
      name
      id
      job_title
      job_desc
      email
    }
      created_at
      updated_at
  }
}
`;

export default ({ data: { strapiBlog: blog } }: { data: SingleQueryResult }) => {

    console.log(blog);
    return (
        <Layout>
            <Head title='Single blog post' />
            <PostLayout title={blog.title}>
                <>
                    {blog.cover &&
                        <div className='text-center my-2'>
                            <figure className="figure">
                                <img
                                    src={blog.cover.file.publicURL}
                                    alt={blog.cover.caption}
                                    className="figure-img img-fluid rounded" />
                                <figcaption className="figure-caption text-right border-bottom">{blog.cover.caption}</figcaption>
                            </figure>
                        </div>
                    }
                    <ReactMarkdown
                        source={blog.body}
                        className='text-justify'
                    />
                </>
                <>
                    <PostMeta label='Author'>
                        <AuthorMedia author={blog.author} />
                    </PostMeta>
                    <PostMeta label='Publishing Date'>
                        <span className='font-serif'>{formateDate(blog.created_at)}</span>
                    </PostMeta>
                </>
            </PostLayout>
        </Layout >
    );
}