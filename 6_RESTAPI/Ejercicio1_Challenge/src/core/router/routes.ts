import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  showCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  showCharacter: '/characters/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'showCharacter'> {
  showCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  showCharacter: (id) => generatePath(switchRoutes.showCharacter, { id }),
};
