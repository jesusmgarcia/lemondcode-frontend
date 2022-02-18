import * as React from 'react';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';
import { Box, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

interface Props {
  url: string;
}

export const LocationCollectionContainer: React.FunctionComponent<Props> = (
  props
) => {
  const { url } = props;

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const currentUrl = url + '/?page=' + currentPage;

  const { locationCollection, pageInfo, loadLocationCollection } =
    useLocationCollection(currentUrl);

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
