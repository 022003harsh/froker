const Blog = require("../models/Blog");

// Route to add a blog
exports.addBlog = async (req, res) => {
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
}

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            data: blogs
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
