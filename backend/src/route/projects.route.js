import express from "express";
import { searchProjectsBySkills, updateProjects, addProjects, removeProjects } from "../controller/projects.controller.js";

const projectsRouter = express.Router();

projectsRouter.get("/", searchProjectsBySkills);

projectsRouter.post("/", addProjects);

projectsRouter.delete("/:projectId", removeProjects);

projectsRouter.put("/:projectId", updateProjects);

export {projectsRouter};