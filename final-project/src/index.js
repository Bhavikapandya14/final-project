import React,{StrictMode} from "react";
import{createRoot} from "react-dom/client";
import "./styles.css";
import App from "./App";
const post=createRoot(document.getElementById("app"));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);