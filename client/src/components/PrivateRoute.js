import React, { Component } from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return <Route {...rest} render />;
};
