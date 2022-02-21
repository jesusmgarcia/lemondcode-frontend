import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import * as classes from './character-collection.styles';

interface Props {
  url: string;
}

export const CharacterCollectionContainer: React.FunctionComponent<Props> = (
  props
) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [searchName, setSearchName] = React.useState<string>('');
  const { url } = props;
  const currentUrl =
    url + '/?page=' + currentPage + (searchName ? `&name=${searchName}` : '');

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

  const handleShowCharacter = (id: number) => {
    history.push(linkRoutes.showCharacter(id));
  };

  // handle character name and save it
  function handleSearchName(value) {
    setSearchName(value);
  }

  // form submit,
  function handleSearch(e) {
    if (e) e.preventDefault();

    setCurrentPage(1);
    loadCharacterCollection();
  }
  return (
    <>
      <Box sx={{ width: '100%', margin: '0 auto' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Characters
        </Typography>
        <form className={classes.form} onSubmit={(e) => handleSearch(e)}>
          <Card>
            <CardHeader title="Search Character by Name" />
            <CardContent>
              <TextField
                label="Search Character Name"
                margin="normal"
                value={searchName}
                onChange={(e) => handleSearchName(e.target.value)}
              />
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button type="submit" variant="contained" color="primary">
                Search
              </Button>
            </CardActions>
          </Card>
        </form>
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
