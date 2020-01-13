import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { createBlog } from "../user/apiBlog";

const AddBlog = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    error: "",
    success: false
  });

  //destructure user and token from localstorage
  const { user, token } = isAuthenticate();
  const { title, description, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "" });
    //Make request to api to create category
    createBlog(user._id, token, { title, description }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          title: "",
          description: "",
          success: true
        });
      }
    });
  };

  const newBlogForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Title</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("title")}
          value={title}
          autoFocus
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Description</label>
        <textarea
          onChange={handleChange("description")}
          className="form-control"
          value={description}
          required
        />
      </div>

      <button className="btn btn-outline-primary">Create Blog</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success"> Blog is created</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Blog should be unique</h3>;
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link to="/user/dashboard" className="text-warning">
        Back to Dashboard
      </Link>
    </div>
  );
  return (
    <Layout
      title="Add New Blog"
      description={`G'day ${user.name}, ready to add a new blog`}
      // className="container-fluid"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newBlogForm()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddBlog;
