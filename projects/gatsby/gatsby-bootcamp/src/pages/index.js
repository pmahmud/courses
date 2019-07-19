import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <ul>
      <li><Link to="/blog">blog</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/contact">contact</Link></li>
    </ul>
  <h1>Hello world!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
)

export default IndexPage
