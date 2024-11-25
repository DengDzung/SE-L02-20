import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routers from "./router";
import React from "react";
function App() {
  return (
    <Router>
      <Routes>
        {routers.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
