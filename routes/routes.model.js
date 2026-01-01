import express from "express";
import controller from "../controllers/url.controller.js";

const router=express.Router();

router.post("/url",controller.addUrl);

router.get("/url",controller.getUrl);
router.get("/:id",controller.redirect)
export default router