import React, { useState } from 'react';

const ProfileSection = ({ profile }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  if (!profile) return null;

  return (
    <section id="profile" className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
        {/* <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button> */}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Personal Details</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-500">Full Name</label>
              <p className="mt-1 text-gray-800">{profile.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <p className="mt-1 text-gray-800">{profile.email}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Education</h3>
          <div className="space-y-4">
            {profile.education?.map((edu, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded">
                <h4 className="font-medium text-gray-800">{edu.degree}</h4>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">Graduated: {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* {isEditing && (
        <div className="mt-6 p-4 border-t">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Edit Profile</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                defaultValue={profile.name}
                className="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                defaultValue={profile.email}
                className="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      )} */}
    </section>
  );
};

export default ProfileSection;