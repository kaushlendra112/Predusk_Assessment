import React from 'react';

const Header = ({ profile }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {profile?.name?.charAt(0) || 'P'}
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{profile?.name || 'Portfolio'}</h1>
              <p className="text-gray-600 text-sm">{profile?.email || 'developer@example.com'}</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-6">
            <a href="#profile" className="text-gray-600 hover:text-blue-600 transition">Profile</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;