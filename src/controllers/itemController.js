import { ItemModel } from "../models/itemModel.js";

const handleError = (res, err) => {
  // Supabase errors may contain message in `message` or `.toString()`
  const message = err?.message || (err && err.toString()) || "Unknown error";
  return res.status(400).json({ error: message });
};

export const ItemController = {
  async create(req, res) {
    try {
      const { customer_name, item_name, status, price, notes, tanggal_masuk, tanggal_selesai } = req.body;
      if (!customer_name || !item_name) {
        return res.status(400).json({ error: "customer_name and item_name are required" });
      }

      const payload = { customer_name, item_name, status, price, notes, tanggal_masuk, tanggal_selesai };
      const created = await ItemModel.create(payload);
      return res.status(201).json(created);
    } catch (err) {
      return handleError(res, err);
    }
  },

  async getAll(req, res) {
    try {
      const { status, limit, offset } = req.query;
      const items = await ItemModel.getAll({ status, limit, offset });
      return res.json(items);
    } catch (err) {
      return res.status(500).json({ error: err.message || err.toString() });
    }
  },

  async getById(req, res) {
    try {
      const item = await ItemModel.getById(req.params.id);
      if (!item) return res.status(404).json({ error: "Item not found" });
      return res.json(item);
    } catch (err) {
      return handleError(res, err);
    }
  },

  async update(req, res) {
    try {
      const updated = await ItemModel.update(req.params.id, req.body);
      return res.json(updated);
    } catch (err) {
      return handleError(res, err);
    }
  },

  async remove(req, res) {
    try {
      await ItemModel.remove(req.params.id);
      return res.json({ message: "Data sepatu berhasil dihapus." });
    } catch (err) {
      return handleError(res, err);
    }
  }
};
