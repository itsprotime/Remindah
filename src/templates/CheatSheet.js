import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    blockquote: styled.blockquote({
      padding: 0,
      margin: '0 1.45rem 1.45rem',
    }),
    code: styled.code({
      backgroundColor: 'rgba(0,0,0,.04)',
      borderRadius: '3px',
      fontFamily:
        'SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace',
      fontSize: '.85rem',
      fontWeight: 400,
      lineHeight: '1.45rem',
      padding: '.2em 0',
    }),
    h1: styled.h1({
      margin: '0 0 1.45rem',
    }),
    table: styled.table({
      borderCollapse: 'collapse',
    }),
    th: styled.th({
      textAlign: 'left',
      padding: '1rem',
      paddingLeft: 0,
      borderBottom: '1px solid rgba(0,0,0,.12)',
    }),
    td: styled.td({
      padding: '1rem',
      paddingLeft: 0,
      borderBottom: '1px solid rgba(0,0,0,.12)',
    }),
  },
}).Compiler;

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, htmlAst } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      {renderAst(htmlAst)}
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
      }
    }
  }
`;
