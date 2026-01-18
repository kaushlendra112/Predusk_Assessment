import { Profile } from "../model/profile.model.js";

export const getSkills = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({
      count: profile.skills.length,
      skills: profile.skills
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSkills = async (req, res) => {
  try {
    const { skills } = req.body;

    if (!Array.isArray(skills)) {
      return res.status(400).json({
        message: "Skills must be an array of strings"
      });
    }

    const profile = await Profile.findOneAndUpdate(
      {},
      { $set: { skills } },
      {
        new: true,
        runValidators: true
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
