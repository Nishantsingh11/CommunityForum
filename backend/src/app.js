import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  })
);
// for the from data
app.use(express.json({ limit: "16kb" }));
// for the url data
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("Public"));
app.use(cookieParser());
export { app };

// routes for the user
import userRoutes from "../src/routes/user.routes.js";
import postRoutes from "../src/routes/post.routes.js";
import likeRoutes from "../src/routes/like.routes.js";
import commnetRoutes from "../src/routes/comment.routes.js";
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/comment", commnetRoutes);
app.use("/api/v1/like", likeRoutes);
