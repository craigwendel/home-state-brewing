import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

export default function Page(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};
