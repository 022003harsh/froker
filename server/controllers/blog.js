const Blog = require("../models/Blog");

// Route to add a blog
exports.addBlog = async (req, res) => {
    try {
        // we will get the highest existing ID and increment
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
    const userId = req.body.userId;
    const blogId = req.params.id;

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
            blog.likedBy = blog.likedBy.filter(id => id !== userId);
            blog.likes -= 1;
        } else {
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


exports.getRecentBlogs = async (req, res) => {
    try {
        // Fetching the latest 3 blogs, sorted by creation date
        const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
        res.status(200).json({
            success: true,
            data: blogs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};