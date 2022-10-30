import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://douglas85rj.github.io/intra-caefe`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-jsx"],
};

export default config;
