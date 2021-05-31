import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { graphql,Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Home({ data }) {
  console.log(data)
  // const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={`header ${styles.header}`}>
        <div>
          <h2>Intern - FPT Telecom</h2>
          <h3>Front-End</h3>
          <p>A final year student at Ho Chi Minh City University of Technology</p>
          <Link className={`btn ${styles.btn}`} to="/projects">My Portolio Projects</Link>
        </div>
        <Img fluid={ data.file.childImageSharp.fluid } /> 
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`