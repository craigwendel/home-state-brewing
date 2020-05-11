import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      I'm the about page
      <Link to="/">Home</Link>
    </div>
  );
}
