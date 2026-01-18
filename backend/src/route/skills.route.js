import express from "express";
import { getSkills, updateSkills } from "../controller/skills.controller.js";

const skillsRouter = express.Router();

skillsRouter.get("/top", getSkills);

skillsRouter.put("/", updateSkills);

export {skillsRouter}