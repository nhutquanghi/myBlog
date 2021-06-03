import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    return (
        <Layout>
            <div className={`container ${styles.container}`}>

                <h2>Contact Me</h2>
                <div>
                    <a className={`icons ${styles.icons}`} href='https://facebook.com/nhutquang99' target='blank'>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a className={`icons ${styles.icons}`} href='https://www.linkedin.com/in/nhut-quang-05630b210/' target='blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a className={`icons ${styles.icons}`} href='https://github.com/nhutquanghi/myBlog' target='blank'>
                        <FontAwesomeIcon icon={faGithubSquare} 
                        title='github account for deSolidState' />
                    </a>
                </div>
                <br/>

                <h2>Personal Profile</h2>
                <div className={`profile ${styles.profile}`}>
                    <p>
                        I am an hard student with an enthusiasm, responsibility in work. I also have analyising an resolving skills. 
                        <b> Short-term goal:</b> accumulate more exprericene when work at company. <b>Long-term goal:</b> become a high skills profession Front-End Developer.
                    </p>   
                    <img className={`img ${styles.img}`} src="frontend.jpg" /> 
                </div>  
                
                <h2>Soft Skills</h2>
                <div className={`profile ${styles.softskill}`}>
                    <ul>
                        <li>Teamwork</li>
                        <li>Self-study</li>
                        <li>Pressure withstanding</li>
                        <li>Communication</li>
                    </ul>
                </div>
                <br/>

                <h2>Technical Skills</h2>
                <div className={`techskill ${styles.techskill}`}>
                    <ul>
                        <li>HTML-CSS-JS</li>
                        <li>Bootstrap</li>
                        <li>PHP and Laravel-Framework</li>
                        <li>Git-GitHub</li>
                    </ul>
                </div>
            </div>
        </Layout> 
    )
}