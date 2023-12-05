//const express = require("express");
 import express from "express";
 import Lab5 from "./lab5.js";
 import HelloRoutes from "./hello.js";
 import UserRoutes from "./users/routes.js";

import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";

import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/kanbas");

import "dotenv/config";
const app = express();
app.use(cors());
CourseRoutes(app);
app.use(express.json());
UserRoutes(app);

HelloRoutes(app);
ModuleRoutes(app);
Lab5(app);
app.listen(4000);