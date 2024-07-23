import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ub-grey text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Vertical Labs. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-ubt-blue">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-ubt-blue">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;