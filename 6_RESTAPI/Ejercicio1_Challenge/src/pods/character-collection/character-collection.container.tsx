import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { Box, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

interface Props {
  url: string;
}

export const CharacterCollectionContainer: React.FunctionComponent<Props> = (
  props
) => {
  const { url } = props;
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const currentUrl = url + '/?page=' + currentPage;

  const { characterCollection, pageInfo, loadCharacterCollection } =
    useCharacterCollection(currentUrl);

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
