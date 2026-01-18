import express from "express";
import { getProfile, createProfile, updateProfile } from "../controller/profile.controller.js";

const profileRouter = express.Router();

profileRouter.get("/", getProfile);

profileRouter.post("/", createProfile);

profileRouter.put("/", updateProfile);

export {profileRouter};