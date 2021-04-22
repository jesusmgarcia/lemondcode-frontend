import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorldComponent } from './components/helloworld/helloWorldComponent';
import logoImg from './assets/logo-on-white-bg.png';

const img = document.createElement('img');
img.src = logoImg;
img.classList.add('logo-style');

document.getElementById('imgContainer').appendChild(img);

ReactDOM.render(
	<div>
		<h1>React</h1>
		<HelloWorldComponent />
	</div>,
	document.getElementById('root')
);
