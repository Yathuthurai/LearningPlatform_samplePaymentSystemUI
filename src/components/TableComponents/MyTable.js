import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./ListItems";
import MediaCard from "./shared/MediaCard";
//import ProfileAvatar from "./shared/ProfileAvatar"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  paperSubject: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MyTable(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            MyTable
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Paper
                  className={classes.paperSubject}
                  style={{ paddingLeft: "7%" }}
                >
                  <MediaCard
                    ImgUrl="https://www.industryglobalnews24.com/images/the-search-for-the-origin-of-lifeextraterrestrial-biology.jpeg"
                    CardTitle="biology"
                    CardContent="Biology"
                    UnitNum="10"
                    Button1Text="ENROLL NOW"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  className={classes.paperSubject}
                  style={{ paddingLeft: "7%" }}
                >
                  <MediaCard
                    ImgUrl="https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
                    CardTitle="chemistry"
                    CardContent="Chemistry"
                    UnitNum="10"
                    Button1Text="ENROLL NOW"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  className={classes.paperSubject}
                  style={{ paddingLeft: "7%" }}
                >
                  <MediaCard
                    ImgUrl="https://www.indiaeducation.net/imagesvr_ce/3698/physics.jpg"
                    CardTitle="physics"
                    CardContent="Physics"
                    UnitNum="10"
                    Button1Text="ENROLL NOW"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  className={classes.paperSubject}
                  style={{ paddingLeft: "7%" }}
                >
                  <MediaCard
                    ImgUrl="https://wintechnology.com/wp-content/uploads/2018/12/it-mindset-or-technology-1080x627.jpg"
                    CardTitle="it"
                    CardContent="Information Technology"
                    UnitNum="10"
                    Button1Text="ENROLL NOW"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  className={classes.paperSubject}
                  style={{ paddingLeft: "7%" }}
                >
                  <MediaCard
                    ImgUrl="https://www.topuniversities.com/sites/default/files/styles/700xauto/public/articles/lead-images/What_Can_You_Do_With_A_Math_Degree.jpg"
                    CardTitle="maths"
                    CardContent="Combined Mathematics"
                    UnitNum="10"
                    Button1Text="Pure Maths"
                    Button2Text="Applied Maths"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

/*
<Grid item xs={12} md={8} lg={9}>
<Paper className={fixedHeightPaper}></Paper>
</Grid>
<Grid item xs={12} md={4} lg={3}>
<Paper className={fixedHeightPaper}></Paper>
</Grid>
*/
