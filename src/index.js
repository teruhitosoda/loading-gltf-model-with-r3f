import "./styles.css";
import { createRoot } from "react-dom/client";
import { StrictMode, Suspense } from "react";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
);
