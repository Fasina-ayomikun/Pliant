import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme } from "@mui/material/styles";
import "./index.css";
import App from "./App";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
