import express from "express";
import { ItemController } from "../controllers/itemController.js";

const router = express.Router();

router.get("/", ItemController.getAll);          // GET /api/items?status=Selesai
router.get("/:id", ItemController.getById);      // GET /api/items/:id
router.post("/", ItemController.create);         // POST /api/items
router.put("/:id", ItemController.update);       // PUT /api/items/:id
router.delete("/:id", ItemController.remove);    // DELETE /api/items/:id

export default router;
