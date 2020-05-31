import React from 'react';
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
