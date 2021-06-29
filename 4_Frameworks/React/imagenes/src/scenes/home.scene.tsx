import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { AppLayout } from 'layouts';

export const HomeScene: React.FC = () => {
  return (
    <AppLayout>
      <Link to={routes.cats}>Cats</Link>
      <Link to={routes.dogs}>Dogs</Link>
    </AppLayout>
  );
};
