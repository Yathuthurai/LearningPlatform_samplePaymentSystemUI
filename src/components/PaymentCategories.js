import React from "react";
//import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
//import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
//import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "One Subject",
    price: "2000",
    description: [
      "You can enroll only one subject",
      "Lecture Video access",
      "Email support",
    ],
    buttonText: "Pay Now",
    buttonVariant: "outlined",
  },
  {
    title: "Three Subjects",
    subheader: "Most popular",
    price: "5000",
    description: [
      "You can enroll three subject",
      "Lecture Video access",
      "Email support",
    ],
    buttonText: "Pay Now",
    buttonVariant: "contained",
  },
  {
    title: "Two Subjects",
    price: "3500",
    description: [
      "You can enroll two subject",
      "Lecture Video access",
      "Email support",
    ],
    buttonText: "Pay Now",
    buttonVariant: "outlined",
  },
];

function PaymentCategories() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container
        style={{ paddingTop: "10px" }}
        maxWidth="sm"
        component="main"
        className={classes.heroContent}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Payment
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          You should pay according to the given details to add subjects to your
          table, then only you can enroll them.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h4" color="textPrimary">
                      Rs.{tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Link href="/paymentform">
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                      style={{ marginLeft: "80%" }}
                    >
                      {tier.buttonText}
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default PaymentCategories;

/*
<CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            LankaTutor
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              MyTable
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Support
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
*/
