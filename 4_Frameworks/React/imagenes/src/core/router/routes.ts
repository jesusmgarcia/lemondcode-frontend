import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  dogs: string;
  cats: string;
  checkout: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  dogs: '/dogs',
  cats: '/cats',
  checkout: '/checkout',
};

interface Routes extends SwitchRoutes {
}

export const routes: Routes = {
  ...switchRoutes,
};
