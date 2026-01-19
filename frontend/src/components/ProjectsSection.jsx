import React, { useMemo, useState } from "react";

const ProjectsSection = ({ projects = [] }) => {
  const [searchSkill, setSearchSkill] = useState("");

  // 🔍 Normalize skills and filter projects based on search
  const filteredProjects = useMemo(() => {
    const query = searchSkill.trim().toLowerCase();
    if (!query) return projects;

    return projects.filter((project) => {
      let skillsArray = [];

      if (Array.isArray(project.skills)) {
        skillsArray = project.skills.map((s) =>
          typeof s === "string" ? s : s.skill
        );
      } else if (typeof project.skills === "string") {
        // split by space or comma
        skillsArray = project.skills.split(/[\s,]+/);
      }

      return skillsArray.some((skill) =>
        skill?.toLowerCase().includes(query)
      );
    });
  }, [projects, searchSkill]);

  return (
    <section id="projects" className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>

        <input
          type="text"
          placeholder="Search projects by skill (e.g. React, Node, MongoDB)"
          value={searchSkill}
          onChange={(e) => setSearchSkill(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="space-y-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => {
            // Normalize skills for display
            const skillsArray = Array.isArray(project.skills)
              ? project.skills.map((s) => (typeof s === "string" ? s : s.skill))
              : typeof project.skills === "string"
              ? project.skills.split(/[\s,]+/)
              : [];

            return (
              <div
                key={project._id}
                className="p-4 border rounded-lg hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-3">{project.description}</p>

                {skillsArray.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skillsArray.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-500 py-10">
            No projects found for this skill.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;