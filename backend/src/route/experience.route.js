import express from "express";
import { updateExperience, addExperience, removeExperience } from "../controller/experience.controller.js";

const experienceRouter = express.Router();

experienceRouter.post("/", addExperience);

experienceRouter.put("/:experienceId", updateExperience);

experienceRouter.delete("/:experienceId", removeExperience);

export {experienceRouter};