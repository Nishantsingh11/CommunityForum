import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createPost,
  getPosts,
  getPost,
  getUserPosts,
  updatePost,
  deletePost
} from "../controllers/post.controller.js";
import { Router } from "express";

const router = Router();

router.route("/createpost").post(authMiddleware, createPost);
router.route("/getposts").get(authMiddleware, getPosts);
router.route("/getpost/:id").get(authMiddleware, getPost);
router.route("/getuserposts").get(authMiddleware, getUserPosts);
router.route("/updatepost/:id").patch(authMiddleware, updatePost);
router.route("/deletepost/:id").delete(authMiddleware, deletePost);



export default router