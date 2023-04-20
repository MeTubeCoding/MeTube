import express from "express";

import {
  createChannels,
  getChannels,
  searchChannels,
} from "../controllers/channels.js";

const router = express.Router();

router.get("/channels", getChannels);
router.post("/searchchannels", searchChannels);
router.post("/", createChannels);

export default router;
