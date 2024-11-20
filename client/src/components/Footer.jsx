import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          &copy; {new Date().getFullYear()} Population Control System. All rights reserved.
        </div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;