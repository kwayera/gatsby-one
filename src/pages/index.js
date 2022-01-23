import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import {page,text} from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="home-heading">
          <h1> Главная страница </h1>
        </div>

        <div className={page}>
          <h1> Главная страница </h1>
          <h1> Привет мир! </h1>
          <h1> Привет люди! </h1>
          <h1> Бла бла бла! </h1>
        </div>
        <div>
          <p className={text}>
            Как известно, в любом проекте всегда есть повторяющиеся элементы,
            для вебсайтов это хедер, футер, навигационная панель. Также
            страницы, вне зависимости от контента, строятся по определённой
            структуре, и так как Gatsby это компилятор для React, здесь
            используется тот же компонентный подход для решения этих проблем.
            Создадим компоненты для хедера и навигационной панели:
            /src/components/header.js
          </p>
        </div>
      </div>
    </Layout>
  )
}


// <h1 style={{ color: "green",textTransform: "capitalize",   }}> Главная страница </h1>
//v2  
//  import Navbar from "../components/Navbar"
//****************************************** */
// import React from "react"
//import { Link } from "gatsby"//
//import Navbar from "../components/Navbar"
//
//export default function Home() {
//  return (
//    <div>
//      <Navbar />
//      <h1>Hello world!</h1>
//      <div>
//        <Link to="/about"> О нас </Link>
//      </div>
//      <div>
//        <Link to="/company/history"> История компании </Link>
//      </div>
//      <a></a>
//      <a href="https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world">
//       gatsby-starter-hello-world
//      </a>
//</div>
//  )
//}
//
//************************************************ */
//v1
//      <nav>
//        <Link to="/"> Главная страница </Link>
//        <Link to="/about"> О нас </Link>
//      </nav>
//      <h1>
//        Hello world!
//      </h1> 
//    <div>
//          <Link to="/about"> О нас </Link>
//    </div>
//      <div>
//        <Link to="/company/history"> История компании </Link>
//     </div>
//      <a href="https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world">
//        gatsby-starter-hello-world
//      </a>
//    </div>
