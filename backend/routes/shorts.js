import express from "express";

import {
  createShorts,
  getShorts,
  searchShorts,
} from "../controllers/shorts.js";

const router = express.Router();

router.get("/shorts", getShorts);
router.post("/searchshorts", searchShorts);
router.post("/", createShorts);

export default router;
