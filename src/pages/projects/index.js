import { graphql,Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Img from 'gatsby-image'

export default function Portfolio({ data }) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={`portfolio ${styles.portfolio}`}>
                <h2>Portfolio</h2>
                <h3>Projects & Website I've Created</h3>
                <div className={`projects ${styles.projects}`}>
                    { projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <Img fluid={projects.frontmatter.thumb.childImageSharp.fluid} />
                                <h3>{ project.frontmatter.title }</h3>
                                <p>{ project.frontmatter.stack }</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Email me at <a src="https://facebook.com/nhutquang99.com">{ contact }</a> for a quote!</p>
            </div>
        </Layout>
    )
}

//export page query
export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childrenImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }  
`