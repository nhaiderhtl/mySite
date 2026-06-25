import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Nico Haider · built with React &amp; three.js</p>
  </footer>
);

export default Footer;
