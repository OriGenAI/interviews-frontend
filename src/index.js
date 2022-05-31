import React from "react";
import { createRoot } from "react-dom/client";
import Todo from "./Todo";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Todo id={2} />);
