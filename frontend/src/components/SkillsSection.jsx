import React from "react";

const SkillsSection = ({ skills = [] }) => {
  return (
    <section id="skills" className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Skills & Expertise
      </h2>

      {skills.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No skills added</p>
      )}
    </section>
  );
};

export default SkillsSection;
