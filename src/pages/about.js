import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faPeopleCarry,faAddressBook, faMapMarked, faMailBulk, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <Layout>
            <section id='about' className={`section ${styles.section}`}>
                <div className={`about__background ${styles.about__background}`}></div>
                <div className={`about__container ${styles.about__container}`}>
                    <h1 className={`section__title ${styles.section__title}`}>
                        <span>About</span>
                        <span>Me</span>
                    </h1>
                    <div className={`row ${styles.row}`}>   
                        <div className={`about__content ${styles.about__content}`}>
                            <ul>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faPeopleCarry} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            <b>Name:</b> <i>Tran Huynh Nhut Quang</i>
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faMailBulk} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            <b>Email:</b> <i>thnquang.digistar.vn@gmail.com</i>
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                        <b>Facebook:</b> <i>nhutquang99</i>
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            <b>GitHub:</b> nhutquanghello
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faAddressBook} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            <b>Phone:</b> <i>0352142080</i>
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faMapMarked} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            <b>Address:</b> <i>8/12c Chu Van An Residence, Ward 26, Binh Thanh District</i>
                                        </span> 
                                    </p>
                                </li>
                            </ul>
                            <Link to="/"><FontAwesomeIcon icon={faArrowAltCircleLeft}/><span> Go back</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout> 
    )
}