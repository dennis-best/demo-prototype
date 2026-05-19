import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../config/gembox-tokens.css";
import "./prototype.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
