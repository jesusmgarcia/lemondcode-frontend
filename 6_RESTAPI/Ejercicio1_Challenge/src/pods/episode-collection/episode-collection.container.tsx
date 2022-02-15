import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { Box, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export const EpisodeCollectionContainer = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const url = 'https://rickandmortyapi.com/api/episode/?page=' + currentPage;

  const { episodeCollection, pageInfo, loadEpisodeCollection } =
    useEpisodeCollection(url);
  const history = useHistory();

  React.useEffect(() => {
    loadEpisodeCollection();
  }, []);

  React.useEffect(() => {
    loadEpisodeCollection();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Episodes
        </Typography>
        <EpisodeCollectionComponent episodeCollection={episodeCollection} />;
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
