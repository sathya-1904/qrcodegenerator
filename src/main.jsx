import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { QrCode } from "./components/QrCode.jsx";
import "./css/qrcode.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QrCode />
  </React.StrictMode>
);
