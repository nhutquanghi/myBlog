import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/contact.module.css'

function validate(){
    if( document.contact.name.value == "" ) {
        alert( "Please provide your name!" );
        document.contact.name.focus() ;
        return false;
     }
}

export default function Contact() {
    return (
        <Layout>
            <div className={`wrapper ${styles.wrapper}`}>
                <form className={`form ${styles.form}`} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <div className={`pageTitile ${styles.pageTitle} ${styles.title}` }>Contact Us </div>
                    <div className={`secondaryTitle ${styles.secondaryTitle} ${styles.title}`}>Please fill this form to contact us.</div>

                    <input type="text" name="name" id="name" htmlFor="name" className={`name ${styles.name} ${styles.formEntry}`} placeholder="Name" required />

                    <input type="text" name="email" id="email" htmlFor="email" className={`email ${styles.email} ${styles.formEntry}`} placeholder="Email" required/>

                    <textarea name="message" id="message" className={`message ${styles.message} ${styles.formEntry}`} placeholder="Message"></textarea>

                    <input type="submit" className={`submit ${styles.submit} ${styles.formEntry}`} value="Send Message" />
                    <input type="reset" className={`reset ${styles.reset} ${styles.formEntry}`} value="Clear" />
                </form>
            </div>



            {/* <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="field-half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field-half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6" />
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send Message" className="special" />
                    </li>
                    <li>
                        <input type="reset" value="Clear" />
                    </li>
                </ul>
            </form> */}
        </Layout>
    )
}