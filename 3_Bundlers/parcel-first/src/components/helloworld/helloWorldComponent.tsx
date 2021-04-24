import React from 'react';
import './helloWorldComponentStyles.scss';

export const HelloWorldComponent: React.FC = () => {
	return (
		<div>
			<span className="result-background">Hello React!</span>
		</div>
	);
};
