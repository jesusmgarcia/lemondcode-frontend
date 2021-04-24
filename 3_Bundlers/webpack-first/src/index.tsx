import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorldComponent } from './components/helloworld/helloWorldComponent';

console.log(`Api base: ${process.env.API_BASE}`);

ReactDOM.render(
	<div>
		<h1>React</h1>
		<HelloWorldComponent />
	</div>,
	document.getElementById('root')
);
