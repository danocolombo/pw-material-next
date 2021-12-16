import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  linkedInIcon: {
    // height: "4rem",
    padding: "2px",
    width: "4rem",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      // height: "2.5rem",
      width: "2.5rem",
    },
  },
  gridItem: {
    margin: "3em",
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-2.5em",
    left: ".5em",
    [theme.breakpoints.down("xs")]: {
      height: "70%",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <footer className={classes.footer}>
      {matchesMD ? null : (
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.link}
              >
                HOME
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                to="/engineering"
                className={classes.link}
              >
                Engineering
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                to="/aws"
                className={classes.link}
              >
                Amazon Web Services (AWS)
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                to="/integrations"
                className={classes.link}
              >
                Integrations
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                to="/enterprise"
                className={classes.link}
              >
                Enterprise & Beyond
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/recovery"
                className={classes.link}
              >
                Recovery
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/cr"
                className={classes.link}
              >
                Celebrate Recovery
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/hobbies"
                className={classes.link}
              >
                Hobbies
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/woodshop"
                className={classes.link}
              >
                Woodshop
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/kitchen"
                className={classes.link}
              >
                Kitchen & Grill
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
                className={classes.link}
              >
                Contact Me
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      <img
        alt="black decorative slash"
        src="/assets/FooterGraphic.svg"
        className={classes.adornment}
      />

      <Grid container justify="flex-start" className={classes.socialContainer}>
        <Grid
          item
          component={"a"}
          href="https://www.linkedin.com/in/dcolombo/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/LinkedInLogo.png"
            alt="Linked In logo"
            className={classes.linkedInIcon}
          />
        </Grid>
      </Grid>
    </footer>
  );
}
