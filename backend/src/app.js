import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: "*"
  })
);
// for the from data
app.use(express.json());
// for the url data
app.use(express.urlencoded({ extended: true }));
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
