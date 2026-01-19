import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Developer Portfolio</p>
            <p className="text-gray-400 text-sm">Built with React & Tailwind CSS</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition">Contacts</a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;