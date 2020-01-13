import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { getBlogs, deleteBlog } from "../user/apiBlog";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const { user, token } = isAuthenticate();

  const loadBlogs = () => {
    getBlogs().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  const destroy = blogId => {
    deleteBlog(blogId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadBlogs();
      }
    });
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <Layout
      title="Manage Blogs"
      description="Perform CRUD on blogs"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Total {blogs.length} Blogs</h2>
          <hr />
          <ul className="list-group">
            {blogs.map((p, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>{p.title}</strong>
                <Link to={`/user/blog/update/${p._id}`}>
                  <span className="badge badge-warning badge-pill">Update</span>
                </Link>
                <span
                  onClick={() => destroy(p._id)}
                  className="badge badge-danger badge-pill"
                >
                  Delete
                </span>
              </li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default ManageBlogs;
