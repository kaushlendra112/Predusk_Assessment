import { Profile } from "../model/profile.model.js";

export const searchProjectsBySkills = async (req, res) => {
  try {
    const { skill } = req.query;

    if (!skill) {
      return res.status(400).json({ message: "Skill query is required" });
    }

    const profile = await Profile.findOne({
      $or: [
        { skills: { $regex: skill, $options: "i" } },
        { "projects.skills": { $regex: skill, $options: "i" } }
      ]
    });

    if (!profile) {
      return res.status(404).json({ message: "No match found" });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProjects = async (req, res) => {
  try {
    const { projectId } = req.params;
    const updateData = {};

    if (req.body.title !== undefined)
      updateData["projects.$.title"] = req.body.title;

    if (req.body.description !== undefined)
      updateData["projects.$.description"] = req.body.description;

    if (req.body.skills !== undefined)
      updateData["projects.$.skills"] = req.body.skills;

    if (req.body.links !== undefined)
      updateData["projects.$.links"] = req.body.links;

    const profile = await Profile.findOneAndUpdate(
      { "projects._id": projectId },
      { $set: updateData },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({
      message: "Project updated successfully",
      projects: profile.projects
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addProjects = async (req, res) => {
  try {
    const { title, description, skills, links } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Project title is required" });
    }

    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.projects.push({
      title,
      description,
      skills,
      links
    });

    await profile.save();

    res.status(201).json({
      message: "Project added successfully",
      projects: profile.projects
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeProjects = async (req, res) => {
  try {
    const { projectId } = req.params;

    const profile = await Profile.findOneAndUpdate(
      {},
      { $pull: { projects: { _id: projectId } } },
      { new: true }
    );

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({
      message: "Project deleted successfully",
      projects: profile.projects
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
