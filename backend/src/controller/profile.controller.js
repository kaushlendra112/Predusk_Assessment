import { Profile } from "../model/profile.model.js";

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProfile = async (req, res) => {
  try {
    const existing = await Profile.findOne();
    if (existing) {
      return res.status(400).json({
        message: "Profile already exists"
      });
    }

    const profile = new Profile(req.body);
    await profile.save();

    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updateData = {};

    if (req.body.name !== undefined) {
      updateData.name = req.body.name;
    }

    if (req.body.email !== undefined) {
      updateData.email = req.body.email;
    }

    if (req.body.links && typeof req.body.links === "object") {
      Object.keys(req.body.links).forEach((key) => {
        updateData[`links.${key}`] = req.body.links[key];
      });
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No valid fields provided for update" });
    }

    const profile = await Profile.findOneAndUpdate(
      {},
      { $set: updateData },
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