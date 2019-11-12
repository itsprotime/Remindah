import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const CheatSheet = ({ data }) => {
  const { markdownRemark: { frontmatter, html } } = data;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default CheatSheet;
