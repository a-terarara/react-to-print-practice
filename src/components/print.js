import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
});

const CustomTextField = props => {
  return (
    <TextField
      label={props.label}
      value={props.value}
      fullWidth
      margin="normal"
      variant="outlined"
    />
  );
};

class Print extends React.Component {
  render() {
    const { classes, src } = this.props;
    return (
      <>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            プロフィール
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <CustomTextField label="氏名" value={src.name} />
                </Grid>
                <Grid item xs={7}>
                  <CustomTextField label="生年月日" value={src.birthdate} />
                </Grid>
                <Grid item xs={3}>
                  <CustomTextField label="性別" value={src.sex} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <img
                src={src.image}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={9}>
              <CustomTextField
                label="住所"
                value={src.address}
              />
            </Grid>
            <Grid item xs={3}>
              <CustomTextField label="電話番号" value={src.telno} />
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

Print.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.object.isRequired
};

export default withStyles(styles)(Print);
