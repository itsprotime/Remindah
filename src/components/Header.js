import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = styled.header({
  display: 'flex',
  justifyContent: 'center',
  background: 'darkslategray',
  padding: '1.45rem',
});

const H1 = styled.h1({
  margin: 0,
});

const Header = ({ siteTitle }) => (
  <Wrapper>
    <H1>
      <Link to="/" css={{ color: 'white', textDecoration: 'none' }}>
        {siteTitle}
      </Link>
    </H1>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
