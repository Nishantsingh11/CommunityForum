import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createPost,
  getPosts,
  getPost,
  getUserPosts,
  updatePost,
  deletePost,
  SearchByTitle,
  SearchByTag,
  getPopularTags
} from "../controllers/post.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router.route("/createpost").post(
  upload.fields([
    {
      name: "img",
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
  authMiddleware,
  createPost
);
router.route("/getposts").get(authMiddleware, getPosts);
router.route("/getpost/:id").get(authMiddleware, getPost);
router.route("/getuserposts").get(authMiddleware, getUserPosts);
router.route("/updatepost/:id").put(authMiddleware, updatePost);
router.route("/deletepost/:id").delete(authMiddleware, deletePost);
router.route("/search").get(SearchByTitle)
router.route("/searchtag").get(SearchByTag)
router.route("/popular").get(getPopularTags)



export default router