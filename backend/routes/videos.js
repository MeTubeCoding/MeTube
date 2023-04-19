import express from "express";

import {
  createVideos,
  getVideos,
  searchVideos,
} from "../controllers/videos.js";

const router = express.Router();

router.get("/videos", getVideos);
router.post("/searchvideos", searchVideos);
router.post("/", createVideos);

export default router;
