import * as React from 'react';
import { useHistory } from 'react-router-dom';
//import { linkRoutes } from 'core/router';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';
import { Box, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export const LocationCollectionContainer = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const url = 'https://rickandmortyapi.com/api/location/?page=' + currentPage;

  const { locationCollection, pageInfo, loadLocationCollection } =
    useLocationCollection(url);
  const history = useHistory();

  React.useEffect(() => {
    loadLocationCollection();
  }, []);

  React.useEffect(() => {
    loadLocationCollection();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Locations
        </Typography>
        <LocationCollectionComponent locationCollection={locationCollection} />
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
