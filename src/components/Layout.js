import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';

const Main = styled.main({
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem',
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global
          styles={{
            body: {
              color: 'rgba(0,0,0,.8)',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
              margin: 0,
            },
          }}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
