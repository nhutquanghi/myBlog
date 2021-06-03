import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project.details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }){
    const {html} = data.markdownRemark
    const {title, stack, featuredImg} = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={`details ${styles.details}`}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={`featured ${styles.featured}`}> 
                    <Img fluid={featuredImg.childImageSharp.fluid}/>
                </div>
                <div className={`html ${styles.html}`} dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }  
`