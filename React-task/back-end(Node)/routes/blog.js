const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");
const {
  blogById,
  read,
  update,
  CreateBlog,
  remove,
  listBlogs
} = require("../controllers/blog");
const { userById } = require("../controllers/user");

// Read the blog information
router.get("/blog/:blogId", read);

//create blog
router.post("/blog/create/:userId", requireSignin, isAuth, CreateBlog);

//Remove the blog by user by id
router.delete("/blog/:blogId/:userId", requireSignin, isAuth, remove);
// Update the user information
router.put("/blog/:blogId/:userId", requireSignin, isAuth, update);
//get all blogs
router.get("/blogs", listBlogs);

router.param("blogId", blogById);
router.param("userId", userById);

module.exports = router;
