import { Profile } from "../model/profile.model.js";

export const searchProjectsBySkills = async (req, res) => {
  try {
    let { skill } = req.query;
    if (!skill) {
      return res.status(400).json({ message: "Skill query is required" });
    }

    if (Array.isArray(skill)) {
      skill = skill[0];
    }

    skill = skill.toString().toLowerCase();

    const profile = await Profile.findOne({
      skills: skill
    });

    if (!profile) {
      return res.json([]);
    }

    res.json(profile.projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProjects = async (req, res) => {
  try {
    const { projectId } = req.params;
    const updateData = {};

    if (req.body.title !== undefined) {
      updateData["projects.$.title"] = req.body.title;
    }

    if (req.body.description !== undefined) {
      updateData["projects.$.description"] = req.body.description;
    }

    if (req.body.links && typeof req.body.links === "object") {
      Object.keys(req.body.links).forEach((key) => {
        updateData[`projects.$.links.${key}`] = req.body.links[key];
      });
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No valid fields provided for update" });
    }

    const profile = await Profile.findOneAndUpdate(
      { "projects._id": projectId },
      { $set: updateData },
      {
        new: true,
        runValidators: true
      }
    );

    if (!profile) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addProjects = async (req, res) => {
  try {
    const { title, description, links } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required"
      });
    }

    const newProject = {
      title,
      description,
      links: {
        github: links?.github || "",
        live: links?.live || ""
      }
    };

    const profile = await Profile.findOneAndUpdate(
      {},
      { $push: { projects: newProject } },
      {
        new: true,
        runValidators: true
      }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeProjects = async (req, res) => {
  try {
    const { projectId } = req.params;

    const profile = await Profile.findOneAndUpdate(
      {},
      { $pull: { projects: { _id: projectId } } },
      {
        new: true
      }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
