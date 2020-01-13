import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
import Profile from "./user/Profile";
import Blog from "./core/Blog";
import ManageBlog from "./core/ManageBlog";
import UpdateBlog from "./core/UpdateBlog";
import About from "./core/About";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <PrivateRoute path="/create/blog" exact component={Blog} />
        <PrivateRoute path="/manage/blog" exact component={ManageBlog} />
        <PrivateRoute
          path="/user/blog/update/:blogId"
          exact
          component={UpdateBlog}
        />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
