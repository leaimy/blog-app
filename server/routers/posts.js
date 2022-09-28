import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/create", createPost);
router.post("/update", updatePost);

export default router;
