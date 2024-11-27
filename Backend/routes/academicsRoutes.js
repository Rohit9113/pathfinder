const express = require("express");
const router = express.Router();
const Academic = require("../models/Academics");

// GET /api/academics - Retrieve all academics
router.get("/", async (req, res) => {
  try {
    const academics = await Academic.find();
    res.status(200).json(academics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching academics", error: error.message });
  }
});

module.exports = router;
