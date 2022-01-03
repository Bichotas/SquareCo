import React from "react";
import AppText from "./AppTextC";
function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={{ color: "red" }}>{error}</AppText>;
}

export default ErrorMessage;
