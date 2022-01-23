import React from 'react'
import Layout from '../components/Layout'
import * as aboutStayles from "../examples/about.module.css"


const about = () => {
    return (
      <Layout>
        <div className={aboutStayles.page}>
          <h1>hello from about page</h1>
          <h1> Стили из ../examples/about.module.css </h1>
          <h1>hello from about page</h1>
          <p className={aboutStayles.text}>
            По своей сути Gatsby это компилятор с кучей плюшек, которыми как раз
            и являются плагины. С помощью них можно настраивать обработку тех
            или иных ...
          </p>
        </div>

        <div className="about-heading">
          <h2>hello from about page</h2>
          <p>Стили из '../components/Layout' </p>
        </div>
      </Layout>
    )
}

export default about

//rafce