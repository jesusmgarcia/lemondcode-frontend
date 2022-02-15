import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { Box, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export const CharacterCollectionContainer = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const url = 'https://rickandmortyapi.com/api/character/?page=' + currentPage;

  const { characterCollection, pageInfo, loadCharacterCollection } =
    useCharacterCollection(url);
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  React.useEffect(() => {
    loadCharacterCollection();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Characters
        </Typography>
        <CharacterCollectionComponent
          characterCollection={characterCollection}
        />
        <Box
          component="div"
          sx={{ marginY: '4rem', display: 'flex', justifyContent: 'center' }}
        >
          <Pagination
            count={pageInfo.pages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
            size="large"
          />
        </Box>
      </Box>
    </>
  );
};
