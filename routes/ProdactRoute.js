import express from "express";
import { getProdact } from "../controllers/ProductController.js";

const router =express.Router();


router.get("/prodacts",getProdact);








export default router;