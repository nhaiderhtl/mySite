import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-8">
      <div className="container mx-auto text-center text-text-secondary">
        <p>&copy; {currentYear} Nico Haider. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
