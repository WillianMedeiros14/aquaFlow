import React from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from "@global/context/useAuth";

export default function Routes() {
  const user = useAuth((state) => state.user);

  if (user?.uid !== "") {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
}
