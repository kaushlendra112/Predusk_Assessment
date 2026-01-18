import { Profile } from "../model/profile.model.js";

export const updateExperience = async (req, res) => {
  try {
    const { experienceId } = req.params;
    const updateData = {};

    if (req.body.company !== undefined) {
      updateData["work.$.company"] = req.body.company;
    }

    if (req.body.role !== undefined) {
      updateData["work.$.role"] = req.body.role;
    }

    if (req.body.duration !== undefined) {
      updateData["work.$.duration"] = req.body.duration;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: "No valid fields provided for update"
      });
    }

    const profile = await Profile.findOneAndUpdate(
      { "work._id": experienceId },
      { $set: updateData },
      {
        new: true,
        runValidators: true
      }
    );

    if (!profile) {
      return res.status(404).json({ message: "Experience not found" });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addExperience = async (req, res) => {
  try {
    const { company, role, duration } = req.body;

    if (!company || !role || !duration) {
      return res.status(400).json({
        message: "Company, role, and duration are required"
      });
    }

    const newExperience = {
      company,
      role,
      duration
    };

    const profile = await Profile.findOneAndUpdate(
      {},
      { $push: { work: newExperience } },
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


export const removeExperience = async (req, res) => {
  try {
    const { experienceId } = req.params;

    const profile = await Profile.findOneAndUpdate(
      {},
      { $pull: { work: { _id: experienceId } } },
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