import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  handleLike,
  handleCommentLike,
  getLikedPosts
} from "../controllers/like.controller.js";
import { Router } from "express";

const router = Router();

router.route("/like/:postid").post(authMiddleware, handleLike);
router.route("/commentlike/:commentid").post(authMiddleware, handleCommentLike);
router.route("/likedposts").get(authMiddleware, getLikedPosts);


export default router;
