// Material-UI imports
import { Grid, makeStyles } from '@material-ui/core';

// Component styles
const useStyles = makeStyles((theme) => ({
  portfolioImg: {
    maxWidth: '500px',
    minWidth: '0',
    width: '100%',
    margin: '2rem 0',
  },
}));

export const PortfolioImage = (props) => {
  const classes = useStyles();

  return (
    <Grid item md={6}>
      <img
        src={props.thumbnail}
        alt={props.imgAlt}
        className={classes.portfolioImg}
      />
    </Grid>
  );
};

export default PortfolioImage;
