import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
// # components
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";

function AppRouter() {
  const routes = [
    {
      path: "/home",
      element: <Home />,
      key: "home",
    },
  ];

  // This is a custom hook that will scroll to the top of the page when the route changes.
  useScrollToTop();

  return (
    <main>
      <Routes>
        {routes.map(({ path, element, key }) => (
          <Route
            key={key}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
        {/* no route matched */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </main>
  );
}

export default AppRouter;
