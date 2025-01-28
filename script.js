import React from "react";
import ReactDOM from "react-dom";

/**
 *
 * React.createElement() is a function that create objects that describe the DOM nodes.
 *
 * ReactDOM.render() is a function that takes the object created by React.createElement() and renders it to the DOM.
 *
 *
 */

// const root = document.getElementById('root');

// const h1 = document.createElement('h1');
// h1.textContent = 'Hello, React!';

// root.appendChild(h1);/

const element = React.createElement("div", {}, [
	React.createElement(
		"h1",
		{
			id: "heading",
		},
		"Hello, React!"
	),
	React.createElement("p", null, "My new react project"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
