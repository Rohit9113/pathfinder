const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const { email, name, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: "Email already registered" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
          email,
          name,
          password: hashedPassword,
      });

      await user.save();
      res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
