import express from "express";
import cors from "cors";
import { profileRouter } from "./route/profile.route.js";
import { projectsRouter } from "./route/projects.route.js";
import { skillsRouter } from "./route/skills.route.js";
import { experienceRouter } from "./route/experience.route.js";

const app = express();

// app.use(cors({
//   origin: "http://localhost:5173/",
//   credentials: true
// }));

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

app.use("/api/profile", profileRouter);

app.use("/api/projects", projectsRouter);

app.use("/api/skills", skillsRouter);

app.use("/api/experience", experienceRouter);

export { app };