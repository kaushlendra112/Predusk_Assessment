import express from "express";
import cors from "cors";
import { profileRouter } from "./route/profile.route.js";
import { projectsRouter } from "./route/projects.route.js";
import { skillsRouter } from "./route/skills.route.js";
import { experienceRouter } from "./route/experience.route.js";

const app = express();

app.use(cors({
  origin: "https://profile.com",
  credentials: true
}));

app.use(express.json({
  limit : "16kb"
}));
app.use(express.urlencoded({
  limit : "16kb"
}));


app.get("/", (req, res) => {
  res.status(200).send("Me-API Playground is running...");
});

app.get("/health", (req, res) => {
    res.status(200).json({ 
        success: true, 
        status: "OK" 
    });
});

app.use("/profile", profileRouter);

app.use("/projects", projectsRouter);

app.use("/skills", skillsRouter);

app.use("/experience", experienceRouter);

export { app };