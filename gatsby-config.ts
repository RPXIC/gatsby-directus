import type { GatsbyConfig } from 'gatsby'
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true
  },
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: `gatsby-crud-directus`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-dts-css-modules',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: process.env.DIRECTUS_URL,
        auth: {
          token: process.env.DIRECTUS_TOKEN
        }
      }
    }
  ]
}

export default config
