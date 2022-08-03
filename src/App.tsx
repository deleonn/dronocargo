import React from "react";
import { Layout } from "./UI";
import Router from "./router/Router";

import "./App.less";

const App: React.FC = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
