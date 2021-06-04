import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { graphql,Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Home({ data }) {
  // console.log(data)
  // const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={`header ${styles.header}`}>
        <div>
          <h2>Intern-Front-End</h2>
          <h3>FPT-TELECOM</h3>
          <p>A final year student at Ho Chi Minh City University of Technology</p>
          <Link className={`btn ${styles.btn}`} to="/about">About Me</Link>
        </div>
        <Img className={`avatar ${styles.avatar}`} fluid={ data.file.childImageSharp.fluid } /> 
      </section>
      
      <section className={`skills ${styles.skills}`}>
        <div className={`skill_container ${styles.skill_container}`}>
          <h1 className={`section__title ${styles.section__title}`}>
            <span>My</span>
            <span> Skills</span>
          </h1>
          <div className={`row ${styles.row}`}>
            <ul className={`skill ${styles.skill}`}>
              <li>
                <span className={`skills_unit ${styles.skills_unit}`}>HTML/CSS</span>
                <span className={`skills_item ${styles.skills_item}`}>
                  <img src='/html5.svg' />
                  <svg></svg>
                </span>
                <span className={`skills_item ${styles.skills_item}`}>
                  <img src='/css-3.svg' />
                  <svg></svg>
                </span>
                <span className={`skills_item ${styles.skills_item}`}>
                  <img src='/bootstrap-4.svg' />
                  <svg></svg>
                </span>
              </li>

              <li>
                <span className={`skills_unit ${styles.skills_unit}`}>Javascript</span>
                <span className={`skills_item ${styles.skills_item}`}>
                  <img src='/jquery-1.svg' />
                </span>
                <span className={`skills_text ${styles.skills_text}`}>
                  RESTfull API
                </span>
                <span className={`skills_text ${styles.skills_text}`}>
                  AJAX
                </span>
              </li>

              <li>
                <span className={`skills_unit ${styles.skills_unit}`}>Git-GitHub</span>
                <span className={`skills_text ${styles.skills_text}`}>
                  Git basic
                </span>
              </li>

              <li>
                <span className={`skills_unit ${styles.skills_unit}`}>Soft skills</span>
                <span className={`skills_text ${styles.skills_text}`}>
                  Teamwork
                </span>
                <span className={`skills_text ${styles.skills_text}`}>
                  Self study
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "avatar1.jpg"}) {
    childImageSharp {
      fluid (maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`