import * as React from 'react';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { Box, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
interface Props {
  url: string;
}

export const EpisodeCollectionContainer: React.FunctionComponent<Props> = (
  props
) => {
  const { url } = props;
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const currentUrl = url + '/?page=' + currentPage;
  const history = useHistory();
  
  const { episodeCollection, pageInfo, loadEpisodeCollection } =
    useEpisodeCollection(currentUrl);

  React.useEffect(() => {
    loadEpisodeCollection();
  }, []);

  React.useEffect(() => {
    loadEpisodeCollection();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleShowCharactersPerEpisode = (id: number) => {
    history.push(linkRoutes.showEpisode(id));
  };
  return (
    <>
      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Episodes
        </Typography>
        <EpisodeCollectionComponent
          episodeCollection={episodeCollection}
          onShow={handleShowCharactersPerEpisode}
        />
        ;
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
