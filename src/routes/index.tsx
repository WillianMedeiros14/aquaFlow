import React from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const isUser = false;

  if (isUser) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
}
