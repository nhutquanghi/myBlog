import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <Layout>
      <section className={`header ${styles.header}`}>
        <div>
          <h2>Thực tập sinh - FPT Telecom</h2>
          <h3>Front-End</h3>
          <p>Sinh viên năm cuối Khoa CNTT & Công Nghệ Phần Mềm</p>
          <Link className={`btn ${styles.btn}`} to="/projects">My Portolio Projects</Link>
        </div>
      </section>
    </Layout>
  )
}
