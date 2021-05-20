/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

/** @jsxRuntime classic */
/** @jsx jsx */
import { 
  css,
  Global,
  jsx
} from '@emotion/react'
import * as React from "preact"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`

          header {
            left: 50%;
            position: fixed;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }

          main {
            background-color: black;
          }

          .gatsby-image-wrapper {
            height: 100%;
            left: 50%;
            position: fixed;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }

          h1 {
            animation: flash 0.1s linear infinite;
            color: white;
            font-family: 'Press Start 2P', Helvetica, Arial, sans-serif;
            font-size: 7vw;
            text-align: center;
            text-transform: lowercase;
          }

          @keyframes flash {
            0% {
              opacity: 1;
            }
        
            100% {
              opacity: 0;
            }
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
