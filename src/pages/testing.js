import React from "react"
import Layout from "../components/Layout"
import * as testingStayles from "../examples/testing.module.css"

const testing = () => {
  return (
    <Layout>
      <div className={testingStayles.text}>
        тест текст
      </div>
    </Layout>
  )
}

export default testing
