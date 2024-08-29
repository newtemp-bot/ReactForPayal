import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React, { StrictMode } from "react";

const str = <h1 style={{ backgroundColor: "red" }}>Ashok Prajapati.</h1>;
const str2 = React.createElement(
    "h5",
    { style: { backgroundColor: "blue" } },
    "Hello"
);

createRoot(document.getElementById("root")).render(
    <>
        {str} {str2}
        <StrictMode>
            <App />
        </StrictMode>
    </>
);
