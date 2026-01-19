import React from "react";

const ExperienceSection = ({ experience = [] }) => {
  return (
    <section id="experience" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Work Experience
      </h2>

      {experience.length > 0 ? (
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={exp._id}
              className="p-4 border rounded-lg hover:shadow-md transition"
            >
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.role}
                </h3>
                <p className="text-lg text-blue-600">
                  {exp.company}
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p>No work experience available</p>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;