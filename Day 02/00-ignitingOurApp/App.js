import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {className: "h1"}, "Hello I'm Heading 1")
const heading2 = React.createElement("h2", {className: "h2"}, "Hello I'm Heading 2")
const heading3 = React.createElement("h3", {className: "h3"}, "Hello I'm Heading 3")

const container = React.createElement("div", {className: "container", style:{backgroundColor:"red", color: "white", textAlign:"center"}}, [heading1, heading2, heading3])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)