import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser
} from "../controllers/user.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1
    }
  ]),
  createUser
);
router.route("/login").post(loginUser);
router.route("/logout").post(authMiddleware, logoutUser);
router.route("/refreshToken").patch(authMiddleware, refreshAccessToken);
router.route("/changePassword").patch(authMiddleware, changeCurrentPassword);
router.route("/me").get(authMiddleware, getCurrentUser);

export default router;
