require("@babel/polyfill");
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { OrgContextProvider } from "./components/OrgContextProvider";

ReactDOM.render(
	<div>
		<OrgContextProvider>
			<App />
		</OrgContextProvider>
	</div>,
	document.getElementById("root")
);
