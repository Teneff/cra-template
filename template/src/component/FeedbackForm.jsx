import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import {
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Button,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import SaveIcon from '@material-ui/icons/Save';
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles((theme) => ({
  '@keyframes spin': {
    from: {
      transform: 'rotateZ(180deg)',
    },
    to: {
      transform: 'rotateZ(0deg)',
    },
  },
  spin: {
    animation: `$spin ${theme.transitions.create([
      'infinite',
      theme.transitions.duration.standard * 2,
    ])}`,
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const FeedbackForm = ({ loading, onFormSubmit, validate }) => {
  const classes = useStyles();
  return (
    <Form onSubmit={onFormSubmit} validate={validate}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Field name="firstName" placeholder="First Name">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    fullWidth
                    label="First Name"
                    variant="outlined"
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field label="Interests" name="interests">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    fullWidth
                    label="First Name"
                    variant="outlined"
                  />
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field name="phone">
                {({ input, meta }) => (
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                    <OutlinedInput
                      id="component-outlined"
                      {...input}
                      label="Phone"
                      fullWidth
                      error={Boolean(meta.touched && meta.error)}
                    />
                    {meta.touched && meta.error && (
                      <FormHelperText id="component-error-text" fullWidth>
                        {meta.error}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              </Field>
            </Grid>

            <Grid item xs={12}>
              <Field name="bio">
                {({ input, meta }) => (
                  <FormControl fullWidth>
                    <TextField
                      {...input}
                      required
                      variant="outlined"
                      label="Bio"
                      multiline
                      rowsMax={6}
                      fullWidth
                      error={Boolean(meta.touched && meta.error)}
                      helperText={
                        (meta.touched && meta.error) || 'Enter a short bio'
                      }
                    />
                  </FormControl>
                )}
              </Field>
            </Grid>

            <Grid item xs={12} className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                startIcon={
                  loading ? <LoopIcon className={classes.spin} /> : <SaveIcon />
                }
                disabled={loading}
                type="submit"
              >
                Submit
              </Button>
              <Button variant="contained">Cancel</Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Form>
  );
};

FeedbackForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

export default FeedbackForm;
