import express from "express";
import {
  createNote,
  getAllNote,
  getNote,
  updateNote,
} from "../controllers/note.controller.js";

const router = express.Router();

router.get("/getNote/:id", getNote);

router.get("/getAllNote", getAllNote);

router.post("/createNote", createNote);

router.put("/updateNote/:id", updateNote);

export default router;
