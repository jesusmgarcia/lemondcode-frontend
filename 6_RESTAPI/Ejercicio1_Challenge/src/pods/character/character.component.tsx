import React from 'react';
import { Button, TextField } from '@material-ui/core';
import * as classes from './character.styles';
import { characterEntityApi } from './api';

interface Props {
  character: characterEntityApi;
  onOk: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onOk } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <img src={character.image} style={{ width: 450 }} />
        <TextField
          label="Name"
          style={{ margin: 8 }}
          value={character.name}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Status"
          style={{ margin: 8 }}
          value={character.status}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Species"
          style={{ margin: 8 }}
          value={character.species}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Type"
          style={{ margin: 8 }}
          value={character.type}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Gender"
          style={{ margin: 8 }}
          value={character.gender}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Origin"
          style={{ margin: 8 }}
          value={character.origin.name}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          style={{ margin: 8 }}
          value={character.location.name}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Created"
          style={{ margin: 8 }}
          value={character.created}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
      </div>
      <div style={{ width: '100%', marginTop: '2rem' }}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => onOk()}
        >
          Go Back
        </Button>
      </div>
    </form>
  );
};
