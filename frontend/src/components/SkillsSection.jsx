import React, { useState, useEffect } from 'react';
import { updateSkills } from '../services/api';
import { DEFAULT_SKILLS } from "../constants/skills";

const SkillsSection = ({ skills = [], allSkills = [], onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(skills);
  
  useEffect(() => {
    setSelectedSkills(skills);
  }, [skills]);

  const handleSaveSkills = async () => {
    try {
      await updateSkills(selectedSkills);
      setIsEditing(false);
      onUpdate();
    } catch (error) {
      console.error('Error updating skills:', error);
    }
  };

  const toggleSkill = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <section id="skills" className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Skills & Expertise</h2>
        <div className="flex gap-2">
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Edit Skills
            </button>
          )}
        </div>
      </div>
      
      {!isEditing ? (
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
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Available Skills</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {DEFAULT_SKILLS.length > 0 ? (
                DEFAULT_SKILLS.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1 rounded-full text-sm transition ${
                      selectedSkills.includes(skill)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {skill}
                  </button>
                ))
              ) : (
                <p className="text-gray-500">No skills available</p>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Selected Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6 p-4 bg-gray-50 rounded">
              {selectedSkills.length > 0 ? (
                selectedSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-1"
                  >
                    {skill}
                    <button
                      onClick={() => toggleSkill(skill)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </span>
                ))
              ) : (
                <p className="text-gray-500">No skills selected</p>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={handleSaveSkills}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Save Skills
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setSelectedSkills(skills);
              }}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;