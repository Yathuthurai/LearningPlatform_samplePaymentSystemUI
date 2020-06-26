import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.005),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ProfileAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="profile"
        src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
        className={classes.large}
        style={{ height: "100px", width: "100px" }}
      />
    </div>
  );
}
