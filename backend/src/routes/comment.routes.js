import { authMiddleware } from "../middlewares/auth.middleware.js";
import { Router } from "express";
import {
  addComment,
  getComments,
  deleteComment
} from "../controllers/comment.controller.js";

const router = Router();
router.route("/addcomment/:postid").post(authMiddleware, addComment);
router.route("/getcomment/:id").get(authMiddleware, getComments);
router.route("/deletecomment/:id").delete(authMiddleware, deleteComment);

export default router;