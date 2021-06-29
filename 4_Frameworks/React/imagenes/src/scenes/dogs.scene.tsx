import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { AppLayout } from 'layouts';
import { ImageListContainer } from 'pods';

export const DogsScene: React.FC = () => {
  return (
    <AppLayout>
      <Link to={routes.cats}>Cats</Link>
      <h1>Dogs List</h1>
      <ImageListContainer useCats={false} />
    </AppLayout>
  );
};
