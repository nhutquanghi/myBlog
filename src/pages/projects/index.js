import React from 'react'
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export default function Portfolio() {
    return (
        <Layout>
            <div className={`portfolio ${styles.portfolio}`}>
                <h1>Portfolio</h1>
                <p>Projects & Website I've Created</p>
            </div>
        </Layout>
    )
}