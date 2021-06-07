import React from 'react'
import * as styles from '../styles/footer.module.css'


export default function Footer() {
    return (
        <footer className={`footer ${styles.footer}`}>
            <hr/>
            <div className={`footer__form ${styles.footer__form}`}>
                <div className={`footer__container ${styles.footer__container}`}>
                    <h1 className={`section__title ${styles.section__title}`}>Get in touch with
                        <span>Me</span>
                    </h1>
                    <div className={`row ${styles.row}`}>
                        <ul>
                            <li>Location: 8/12c cư xá Chu Văn An p26 quận Bình Thạnh</li>
                            <li>Email: thnquang.digistar.vn@gmail.com</li>
                            <li>Facebook: @nhutquang99</li>
                            <li>Phone: 0352142080</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}