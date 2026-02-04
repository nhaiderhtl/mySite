import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center items-center py-6 px-4">
        <h1 className="text-4xl text-primary animate-popIn font-bold tracking-wide">
          Welcome to my Personal Website!
        </h1>
      </div>
    </header>
  );
};

export default Header;
