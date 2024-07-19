// Import the required modules
const express = require("express")
const router = express.Router()

const {
  addBlog,
  getAllBlogs,
//   getBlog
} = require("../controllers/blog")

// Route to add a blog post
router.post("/addBlog", addBlog)

// Route to get all blogs sorted by the most recent post
router.get("/getAllBlogs", getAllBlogs);

module.exports = router