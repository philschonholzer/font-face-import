import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="How to link/import fonts with styled-components" />
    <h1>How to link/import fonts with styled-components</h1>
    <p>
      This is an example how you <b>should</b> add a @font-face in a gatsby
      project with styled-components. See{" "}
      <a href="https://github.com/philschonholzer/font-face-import">source</a>{" "}
      on github.
    </p>
    <p>
      See how the page does not flicker if you click on a internal{" "}
      <Link to="/page-2/">link to page 2</Link>.
    </p>
    <p>
      If you want to see an example how not to do it, take a look at this{" "}
      <a href="https://font-face-import.netlify.app">project</a>.
    </p>
    <div css="display: flex; flex-wrap: wrap; margin: 1em -1em">
      <div css="flex: 0 1 300px; margin: 1em">
        <Image />
      </div>
      <div css="flex: 1 1 0%; margin: 1em">
        <h2>The solution</h2>
        <p>
          Even if you use styled-components don't define @font-face with it.
          Just import a font.css in your Gatsby-layout instead. Importing a
          css-file with the @font-face definitions is easy and removes the
          flickering that you get from defining the @font-face inside of a
          styled-component.
        </p>
        <h2>Why is this happening?</h2>
        <p>
          If you define the @font-face in styled-components - for example with
          createGlobalStyle - the fonts are reloaded on each render of react.
          See this Github{" "}
          <a href="https://github.com/gatsbyjs/gatsby/issues/16452">issue</a>.
        </p>
        <p>
          With <code>import '../font.css'</code> this wont happen.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
