const Blog = require("../models/Blog");
const { errorHandler } = require("../helpers/dbErrorHandler");

// Find blog by id
exports.blogById = (req, res, next, id) => {
  Blog.findById(id).exec((err, blog) => {
    if (err || !blog) {
      return res.status(400).json({
        error: "Blog not found"
      });
    }
    req.blog = blog;
    next();
  });
};

// Read the blog information
exports.read = (req, res) => {
  return res.json(req.blog);
};

//get all blogs
exports.listBlogs = (req, res) => {
  Blog.find((err, blogs) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(blogs);
  });
};
//create user blog
exports.CreateBlog = (req, res) => {
  const blog = new Blog(req.body);
  blog.save((err, blog) => {
    if (err) {
      return res.status(400).json({
        // error: errorHandler(error)
        error: errorHandler(error)
      });
    }
    res.json({
      blog
    });
  });
};

//Update blog by user
exports.update = (req, res) => {
  Blog.findOneAndUpdate(
    { _id: req.blog._id },
    { $set: req.body },
    { new: true },
    (err, blog) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to perform this action"
        });
      }

      res.json(blog);
    }
  );
};

//Remove the blog by user
exports.remove = (req, res) => {
  let blog = req.blog;
  blog.remove((err, deleteBlog) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      // deleteProduct,
      message: "Blog delete successfully"
    });
  });
};
