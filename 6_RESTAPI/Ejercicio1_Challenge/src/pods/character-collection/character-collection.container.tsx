import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
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
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { url } = props;
  const currentUrl = url + '/?page=' + currentPage;

  const history = useHistory();

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

  const handleShowCharacter = async (id: number) => {
    history.push(linkRoutes.showCharacter(id));
  };

  return (
    <>
      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Characters
        </Typography>
        <CharacterCollectionComponent
          characterCollection={characterCollection}
          onShow={handleShowCharacter}
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
