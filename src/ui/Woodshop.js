import React from "react";
import Link from "../Link";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";


const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    marginTop: 20,
    padding: 5,
    backgroundColor: "yellow",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  buttonArrow: {
    width: 15,
    height: 15,
    fill: theme.palette.common.black
  },
  titleText: {
    color: "white",
    fontSize: "4em",
  },
  supportText: {
    color: "white",
    fontSize: "2rem",
  },
  background: {
    backgroundImage: `url("/assets/woodshop.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/woodshop.svg")`,
      backgroundAttachment: "inherit"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
}));

export default function WoodshopDisplay(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" className={classes.titleText}>
              There is a time for everything...
            </Typography>
            <Typography variant="h1" className={classes.supportText}>
              It is just real pleasing to take a mental break and do something physical.<br/>
              I find a peaceful place in the woodshop
            </Typography>
            <Button
                    component={Link}
                    to="/woodshop"
                    className={classes.learnButton}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Check it out</span>
                    <ButtonArrow className={classes.buttonArrow}
                      width={15}
                      height={15}
                      fill={theme.palette.common.black}
                    />
                  </Button>
            <Grid container justify={matchesSM ? "center" : undefined} item>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        
      </Grid>
    </Grid>
  );
}
