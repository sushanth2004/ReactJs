// const heading= React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I'm an H1 tag."),
      React.createElement("h2", {}, "I'm an H2 tag."),
    ]
    //if we have more than one child then we create array of children.
  )
);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
