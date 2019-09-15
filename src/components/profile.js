import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ReactToPrint from "react-to-print";

import Print from "./print";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function Profile(props) {
  const classes = useStyles();
  const componentRef = useRef();
  const { src } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={src.image}
        title={src.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {src.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Preview src={src} />
        <ReactToPrint
          trigger={() => (
            <Button size="small" color="primary">
              印刷
            </Button>
          )}
          content={() => componentRef.current}
        />
        <div style={{ display: "none" }}>
          <Print ref={componentRef} src={src} />
        </div>
      </CardActions>
    </Card>
  );
}

const Preview = props => {
  const componentRef = useRef();
  const [open, setOpen] = React.useState(false);
  const { src } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        プレビュー
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`${src.name}のプロフィールを印刷しますか？`}</DialogTitle>
        <DialogContent>
          <Print ref={componentRef} src={src} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <ReactToPrint
            trigger={() => (
              <Button size="small" color="primary">
                印刷
              </Button>
            )}
            content={() => componentRef.current}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};
