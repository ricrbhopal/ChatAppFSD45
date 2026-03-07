import express from "express";
import { getAllUsers, updateProfile } from "../controllers/userController.js";
import { Protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all users
router.get("/allUsers", Protect, getAllUsers);

// Update current user profile
router.put("/profile", Protect, updateProfile);

export default router;
