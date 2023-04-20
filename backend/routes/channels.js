import express from "express";

import {
  createChannels,
} from "../controllers/channels.js";

const router = express.Router();

router.post("/", createChannels);

export default router;
