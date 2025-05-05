import express from "express";
import { protectRoute } from "../middleware/auth-middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message-controller.js";

const router = express.Router();


router.get("/message/:id", protectRoute, getMessages);
router.post("/send/message/:id", protectRoute, sendMessage);


router.get("/users", protectRoute, getUsersForSidebar);

export default router;
