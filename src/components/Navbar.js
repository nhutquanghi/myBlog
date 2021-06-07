import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/home.module.css'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
        site{
            siteMetadata{
                    title
                }
            }
        }
    `)

    //const { title } = data.site.siteMetadata

    return (
        <nav>
            <img className={`icon ${styles.icon}`} src="/icons.svg"/>   
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">News</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Me</Link>   
            </div>
        </nav>
    )
}