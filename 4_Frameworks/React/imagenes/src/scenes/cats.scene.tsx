import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { AppLayout } from 'layouts';
import { ImageListContainer } from 'pods';

export const CatsScene: React.FC = () => {
  return (
    <AppLayout>
      <Link to={routes.dogs}>Dogs</Link>
      <h1>Cats List</h1>
      <ImageListContainer useCats={true} />
    </AppLayout>
  );
};
