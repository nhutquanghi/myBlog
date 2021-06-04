import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faPeopleCarry,faAddressBook, faMapMarked, faMailBulk } from "@fortawesome/free-solid-svg-icons";

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
                                            Name: Tran Huynh Nhut Quang
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faMailBulk} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            Email: thnquang.digistar.vn@gmail.com
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            Facebook: nhutquang99
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            GitHub: nhutquanghello
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faAddressBook} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            Phone: 0352142080
                                        </span> 
                                    </p>
                                </li>
                                <li>
                                    <p className={`about__item ${styles.about__item}`}>
                                        <span className={`about__icon ${styles.about__icon}`}>
                                            <FontAwesomeIcon icon={faMapMarked} size="2x"/>
                                        </span>    
                                        <span className={`about__text ${styles.about__text}`}>
                                            Address: 8/12c Chu Van An Residence, Ward 26, Binh Thanh District
                                        </span> 
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout> 
    )
}