import React from 'react';
import { hot } from 'react-hot-loader/root';
//import { ImageListContainer } from "./components";
import { RouterComponent } from 'core/router';

const App: React.FC = () => {
  return <RouterComponent />;
  //<ImageListContainer />;
};

export default hot(App);
