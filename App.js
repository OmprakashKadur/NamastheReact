import React from "react";
import ReactDOM from "react-dom"

// TODO: Create Element from React
const heading = React.createElement(
	"h1",
	{ id: "header",  },
	"Hello World from React parcel1 !"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
