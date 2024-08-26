import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  authStatus
} from "../controllers/user.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/authStatus").get(authMiddleware, authStatus)


router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
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
  createUser
);
router.route("/login").post(loginUser);
router.route("/logout").post(authMiddleware, logoutUser);
router.route("/refreshToken").patch(authMiddleware, refreshAccessToken);
router.route("/changePassword").patch(authMiddleware, changeCurrentPassword);
router.route("/me").get(authMiddleware, getCurrentUser);

export default router;
