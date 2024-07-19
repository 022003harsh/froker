// Import the required modules
const express = require("express")
const router = express.Router()

const {
  addBlog,
  getAllBlogs,
  getBlogById,
  toggleLike
} = require("../controllers/blog")

// Route to add a blog post
router.post("/addBlog", addBlog)

// Route to get all blogs sorted by the most recent post
router.get("/getAllBlogs", getAllBlogs);

// Route to get blog by id
router.get("/getBlog/:id", getBlogById);

// Route for like toggle button
router.post("/like/:id", toggleLike);

module.exports = router