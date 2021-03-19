import express from "express";
import {
  authUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
  getAllUsers,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/").post(registerUser).get(protect, admin, getAllUsers);

export default router;
