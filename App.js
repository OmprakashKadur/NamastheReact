// TODO: Create Element from JavaScript
const heading = document.createElement("h1");
heading.innerHTML = "Hello World! from JavaScript";
const root = document.getElementById("root");
root.appendChild(heading);

// TODO: Create Element from React
const heading1 = React.createElement(
	"h1",
	{ id: "header" },
	"Hello World from React!"
);
console.log(heading1);
//? React.createElement: This is a method provided by the React library to create a React element. It takes three arguments:
//? Type: The type of the HTML element you want to create (in this case, an "h1" element).
//? Props: An object representing the properties/attributes you want to apply to the element. In this example, it's an empty object {}, meaning no additional properties are applied.
//? Children: The content or children of the element. Here, "Hello World from React" is the text content of the <h1> element.

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
//? ReactDOM.createRoot: This method initializes a root container for rendering React elements using the React 18+ API. It takes a DOM element as an argument and prepares it to render a React component tree.

root1.render(heading1);
//? root.render: This method renders the React element (in this case, the heading element created earlier) into the root container. The content of heading ("Hello World from React") will be displayed inside the DOM element with the id "root".

// TODO: Create Child Element from React
const heading2 = React.createElement(
	"div",
	{ id: "parent" },
	[React.createElement("h2", { class: "child" }, "Im a Sub header 1"),React.createElement("h2", { class: "child" }, "Im a Sub header 2")]
);
console.log(heading2);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading2);



//! NOTE: React will overwrite everything inside "root" and replaces with whatever given inside render.
//? whatever tags are there inside root will be replaced by render method


