import { graphql } from "gatsby"
import React from "react"
import { MdPlace } from "react-icons/md"
import ReactMarkdown from "react-markdown"
import { Media } from "reactstrap"
import { Gallery } from "../../gallery"
import Head from "../../head"
import { Layout, PostLayout, PostMeta } from "../../layout"
import { formateDate } from "../../text/formating"
import { SingleResult } from "../query"

export const activityQuery = graphql`
  query activityQuery($id: Int!) {
    strapiActivity(strapiId: { eq: $id }) {
      date
      description
      id
      strapiId
      title
      venue
      Cover {
        caption
        file {
          publicURL
          childImageSharp {
            fluid {
              originalImg
              aspectRatio
              src
            }
          }
        }
      }
      Gallery {
        caption
        file {
          publicURL
          childImageSharp {
            fluid {
              originalImg
              aspectRatio
              src
            }
          }
        }
      }
    }
  }
`

export default ({
  data: { strapiActivity: activity },
}: {
  data: SingleResult
}) => {
  return (
    <Layout>
      <Head title={`${activity.title.slice(0)}`} />
      <PostLayout title={activity.title}>
        <>
          {activity.Cover && (
            <div className="text-center my-2">
              <figure className="figure">
                <img
                  src={activity.Cover.file.publicURL}
                  alt={activity.Cover.caption}
                  className="figure-img img-fluid rounded"
                />
                <figcaption className="figure-caption text-right border-bottom">
                  {activity.Cover.caption}
                </figcaption>
              </figure>
            </div>
          )}
          <ReactMarkdown
            source={activity.description}
            className="text-justify"
          />
          <PostMeta label="Image Gallery">
            <Gallery images={activity.Gallery} />
          </PostMeta>
        </>
        <>
          <PostMeta label="Date">{formateDate(activity.date)}</PostMeta>
          {activity.venue && (
            <PostMeta label="Location">
              <iframe
                frameBorder="0"
                style={{
                  border: 0,
                  width: "100%",
                  minHeight: "350px",
                }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  activity.venue
                )}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
              />
              <Media>
                <Media left className="mr-2">
                  <MdPlace />
                </Media>
                <Media body>{activity.venue}</Media>
              </Media>
            </PostMeta>
          )}
        </>
      </PostLayout>
    </Layout>
  )
}
