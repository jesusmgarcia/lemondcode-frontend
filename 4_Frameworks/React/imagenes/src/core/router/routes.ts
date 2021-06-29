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

interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {
  //editEmployee: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  //editEmployee: (id) => generatePath(switchRoutes.editEmployee, { id }),
};
