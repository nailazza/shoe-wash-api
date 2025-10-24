import { supabase } from "../config/supabaseClient.js";

/**
 * Simple wrapper around Supabase CRUD for `items` table.
 * All methods throw errors on failure (caller should handle HTTP response).
 */

export const ItemModel = {
  async create(payload) {
    const { data, error } = await supabase
      .from("items")
      .insert([payload])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getAll({ status, limit, offset } = {}) {
    let q = supabase.from("items").select("*");

    if (status) q = q.eq("status", status);
    q = q.order("created_at", { ascending: false });

    if (limit && offset !== undefined) {
      const from = parseInt(offset, 10);
      const to = from + parseInt(limit, 10) - 1;
      q = q.range(from, to);
    } else if (limit) {
      q = q.limit(parseInt(limit, 10));
    }

    const { data, error } = await q;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from("items")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  async update(id, payload) {
    const { data, error } = await supabase
      .from("items")
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { data, error } = await supabase
      .from("items")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return data;
  }
};
