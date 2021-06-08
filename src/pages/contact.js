import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/contact.module.css'



export default function Contact() {
    return (
        <Layout>
            <div className={`wrapper ${styles.wrapper}`}>
                <form className={`form ${styles.form}`} name="contact_form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
                    
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <div className={`pageTitile ${styles.pageTitle} ${styles.title}` }>Contact Us </div>
                    <div className={`secondaryTitle ${styles.secondaryTitle} ${styles.title}`}>Please fill this form to contact us.</div>

                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        htmlFor="name" 
                        className={`name ${styles.name} ${styles.formEntry}`} 
                        placeholder="Name" 
                        pattern="[a-z]{1,15}"
                        title="Please enter your name"
                        />

                    <input type="text" name="email" id="email" htmlFor="email" className={`email ${styles.email} ${styles.formEntry}`} placeholder="Email"/>

                    <textarea name="message" id="message" className={`message ${styles.message} ${styles.formEntry}`} placeholder="Message"></textarea>

                    <input type="submit" className={`submit ${styles.submit} ${styles.formEntry}`} value="Send Message" />
                    <input type="reset" className={`reset ${styles.reset} ${styles.formEntry}`} value="Clear" />
                </form>
            </div>
        </Layout>
    )
}