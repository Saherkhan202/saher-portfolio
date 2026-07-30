const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

// GET - Get All Contact Messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Messages could not be fetched.",
    });
  }
});


// POST - Contact Form Message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check if all fields are filled
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    // Create new message
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    // Save message to MongoDB
    const savedMessage = await newMessage.save();

    // Send success response
    res.status(201).json({
      success: true,

      message: "Your message has been sent successfully!"+savedMessage,
      data: savedMessage,
    });
  } catch (error) {
    console.error("Error saving message:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Message could not be sent.",
    });
  }
});

module.exports = router;