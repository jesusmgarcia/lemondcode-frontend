import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  showCharacter: string;
  showEpisode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  showCharacter: '/characters/:id',
  showEpisode: '/episodes/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes
  extends Omit<SwitchRoutes, 'showCharacter' | 'showEpisode'> {
  showCharacter: NavigationFunction;
  showEpisode: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  showCharacter: (id) => generatePath(switchRoutes.showCharacter, { id }),
  showEpisode: (id) => generatePath(switchRoutes.showEpisode, { id }),
};
