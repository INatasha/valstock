import React from "react";

import "./App.scss";

import Layout from "./components/Layout";
import Login from "./components/login/Login";

function App(): JSX.Element {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

export default App;

// /login - login page
// /dashboard - dashboard/main page
// /dashboard/details - detail page
// album page
