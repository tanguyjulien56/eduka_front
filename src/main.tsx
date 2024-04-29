import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ModalDisciplineProvider } from "./utils/Context/ModalDisciplineContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalDisciplineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalDisciplineProvider>
  </React.StrictMode>
);
