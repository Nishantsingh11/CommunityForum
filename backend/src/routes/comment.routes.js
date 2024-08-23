import { authMiddleware } from "../middlewares/auth.middleware.js";
import { Router } from "express";
import {
  addComment,
  getComments,
  deleteComment
} from "../controllers/comment.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/addcomment/:postid").post(
  upload.fields([
    {
      name: "commentimg",
      maxCount: 1
    }
  ]),
  (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      console.error('Multer Error:', err);
      return res.status(500).send(err.message);
    } else if (err) {
      console.error('Unknown Error:', err);
      return res.status(500).send(err.message);
    }
    next();
  },
  authMiddleware, addComment
);
router.route("/getcomment/:id").get(authMiddleware, getComments);
router.route("/deletecomment/:commentid").delete(authMiddleware, deleteComment);

export default router;