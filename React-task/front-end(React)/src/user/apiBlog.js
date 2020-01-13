import { API } from "../config";

//create blog
export const createBlog = (userId, token, blog) => {
  return fetch(`${API}/blog/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(blog)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

//get all blogs
export const getBlogs = () => {
  return fetch(`${API}/blogs`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//get blog
export const getBlog = blogId => {
  return fetch(`${API}/blog/${blogId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//delete blogs
export const deleteBlog = (blogId, userId, token) => {
  return fetch(`${API}/blog/${blogId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//update blogs
export const updateBlog = (blogId, userId, token, blog) => {
  return fetch(`${API}/blog/${blogId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: blog
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
