const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog"); // Ensure this path is correct

// Route to add a blog
router.post("/addBlog", async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: newBlog
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
