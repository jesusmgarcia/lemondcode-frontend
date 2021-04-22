import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorldComponent } from './components/helloworld/helloWorldComponent';

ReactDOM.render(
	<div>
		<h1>React</h1>
		<HelloWorldComponent />
	</div>,
	document.getElementById('root')
);
