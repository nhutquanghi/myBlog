import React from 'react'
import Layout from "../components/Layout"
import {Link} from 'gatsby'

export default function Success() {
    return (
        <Layout>
            <div>
                <h1>Success</h1>
                <p>Thanks you for contact us</p>
                <Link to="/contact">Go back side</Link>
            </div>
        </Layout>
    )
}