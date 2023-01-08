import React from "react";
import ReactDOM from "react-dom";

// 2) createElement is used to create react elements takes 3 args
// createElement(tag,props,children) props(accept null also) and children are optional
const heading = React.createElement("h1", {}, "namste everyone");
const heading1 = React.createElement(
  "h2",
  { id: "title", key: "h1" },
  "heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "heading 2"
);
const container = React.createElement("div", {}, [heading1, heading2]);

// React compoenent
// Functional name of component starts with capital letter- it's not mandatory

// React element
const heading3 = (
  <h1 id="title" key="h2">
    Namaste react
  </h1>
);

// to render react element use {heading} in JSX
// to render another compoenent use <heading/> or {heading()} in JSX
const header = () => {
  return (
    <div>
      <h1>Namaste react</h1>
    </div>
  );
};
// createRoot tells react about root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
