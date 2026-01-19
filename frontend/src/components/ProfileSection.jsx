import React from "react";

const ProfileSection = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="profile" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Profile Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Personal Details
          </h3>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Full Name
              </label>
              <p className="mt-1 text-gray-800">
                {profile.name}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                Email
              </label>
              <p className="mt-1 text-gray-800">
                {profile.email}
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Education
          </h3>

          <div className="space-y-4">
            {profile.education?.length > 0 ? (
              profile.education.map((edu, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium text-gray-800">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500">
                    Graduated: {edu.year}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No education details available
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
