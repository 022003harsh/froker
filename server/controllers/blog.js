const Blog = require("../models/Blog");

// Route to add a blog
exports.addBlog = async (req, res) => {
    try {
        // Get the highest existing ID and increment
        const maxId = await Blog.findOne({}, { id: 1 }).sort({ id: -1 }).exec();
        const newId = maxId ? maxId.id + 1 : 1;

        const newBlog = new Blog({ ...req.body, id: newId });
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

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findOne({ id: parseInt(req.params.id) });
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        res.status(200).json({
            success: true,
            data: blog
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.toggleLike = async (req, res) => {
    const userId = req.body.userId; // Get user ID from request body
    const blogId = req.params.id; // Get blog ID from request params

    try {
        const blog = await Blog.findOne({ id: parseInt(blogId) });

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        const hasLiked = blog.likedBy.includes(userId);

        if (hasLiked) {
            // User has already liked the blog, so remove the like
            blog.likedBy = blog.likedBy.filter(id => id !== userId);
            blog.likes -= 1;
        } else {
            // User has not liked the blog yet, so add the like
            blog.likedBy.push(userId);
            blog.likes += 1;
        }

        await blog.save();

        res.status(200).json({
            success: true,
            data: {
                likes: blog.likes,
                likedBy: blog.likedBy
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};