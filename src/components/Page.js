import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';
import Footer from './Footer';

export default function Page(props) {
  return (
    <>
      <AppHeader />
      {props.children}
      <Footer />
    </>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};
