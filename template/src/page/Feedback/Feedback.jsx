import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, makeStyles, CardMedia, Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import FeedbackForm from '../../component/FeedbackForm';

const validate = (values) => {
  const errors = {};
  if (!values.bio) {
    errors.bio = 'Please enter bio';
  } else if (!values.bio.startsWith('I')) {
    errors.bio = 'You must begin with capital "I"';
  }
  if (!values.phone) {
    errors.phone = 'Phone is required';
  } else if (!values.phone.match(/^\+?\d+$/)) {
    errors.phone = 'Invalid phone number';
  }
  return errors;
};

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    display: 'inline-block',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '56.25%', // 16:9
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Feedback = ({ loading, onLoad, onFormSubmit }) => {
  const classes = useStyles();

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Card className={classes.card}>
            <CardMedia
              image="https://source.unsplash.com/random/600x800"
              title="Image title"
              className={classes.cardMedia}
            />
          </Card>
        </Grid>
        <Grid item md={6}>
          <FeedbackForm loading={loading} onFormSubmit={onFormSubmit} validate={validate} />
        </Grid>
      </Grid>
    </Container>
  );
};

Feedback.defaultProps = {
  loading: true,
};

Feedback.propTypes = {
  loading: PropTypes.bool,
  onLoad: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Feedback;
