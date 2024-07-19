const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        blogTitle: {
            type: String,
            required: true,
            trim: true,
        },
        thumbnail: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        readTime: {
            type: String,
            required: true,
            trim: true,
        },
        likes: {
            type: String,
            trim: true,
        },
        description: [{
            descTitle: {
                type: String,
                required: true,
                trim: true,
            },
            descContent: {
                type: String,
                required: true,
                trim: true,
            },
            descImage: {
                type: String,
                trim: true,
            }
        }],
        createdAt: {
            type: Date,
            default: Date.now
        },
    }
);

module.exports = mongoose.model("blog", blogSchema);