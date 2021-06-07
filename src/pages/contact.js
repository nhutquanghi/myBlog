import React from 'react'
import Layout from "../components/Layout"

export default function Contact() {
    return (
        <Layout>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <label>Name: <input name="name" placeholder="Your Name" type="text" /></label>
                <button>Send</button>
            </form>
        </Layout>
    )
}