import React from "react";
import Link from "../src/Link";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  awsIcon: {
    marginLeft: "2em",
    height: "80px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  certIcon: {
    marginLeft: "2em",
    width: "100px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  techTitle: {
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  techIcon: {
    marginRight: "2em",
    marginLeft: "2em",
    marginBottom: "2em",
    width: "100px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  techDesc: {
    maxWidth: "400px",
  },
  solutionImage: {
    maxWidth: "350px",
    paddingRight: "5em",
  },
}));

export default function EngineeringPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  //   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h2"
          gutterBottom
          style={{
            marginLeft: matchesSM ? 0 : "5rem",
            marginTop: matchesSM ? "1em" : "1em",
          }}
          align={matchesSM ? "center" : undefined}
        >
          Amazon Cloud Technology
        </Typography>
        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
          <img
            className={classes.awsIcon}
            alt="mobile phone icon"
            src="/assets/AWS_Logo.svg"
            width="250em"
          />
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Certifications-----*/}
        <Grid
          container
          direction="row"
          style={{ marginTop: matchesSM ? "1em" : "2em" }}
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Offically Certified</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Serious needs, requires serious commitment.
            </Typography>
            <Typography variant="subtitle1">
              Not just getting a free account and messing around on YouTube.
              {matchesSM ? null : <br />}But actually taking the time to get
              seriously educated and experienced.
            </Typography>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.certIcon}
              alt="AWS Certified Architect"
              src="/assets/AWS-SolutionArchitect.png"
            />
            {matchesSM ? null : <br />}
            <img
              className={classes.certIcon}
              alt="AWS Certified Developer"
              src="/assets/AWS-DeveloperAssociate.png"
            />
            {matchesSM ? null : <br />}
            <img
              className={classes.certIcon}
              alt="AWS Cloud Practioner"
              src="/assets/AWS-CloudPractitioner.png"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/*-----Full Stack-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "2em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Full-Stack Experience</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Top to bottom. Inside-out
            </Typography>
            <Typography variant="subtitle1">
              From domains, storage, databases, APIs and front-end development.
              {matchesSM ? null : <br />}Doing what is necessary to make things
              happen.
            </Typography>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software"
              src="/assets/customSoftwareIcon.svg"
              width="250em"
            />
          </Grid>
        </Grid>
        {/* ====================== START TECH APPS ROW 1 ================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ marginTop: "5em" }}
        >
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS Serverless1"
                src="/assets/AWS_Serverless.svg"
              />
              <div>
                <div className={classes.techTitle}>Serverless</div>
                <div className={classes.techDesc}>
                  Serverless computing offers a number of advantages over
                  traditional cloud-based or server-centric infrastructure. For
                  many developers, serverless architectures offer greater
                  scalability, more flexibility, and quicker time to release,
                  all at a reduced cost.
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS Amplify1"
                src="/assets/AWS_Amplify.svg"
              />
              <div>
                <div className={classes.techTitle}>Amplify</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF TECH APPS ROW 1 ==================*/}
        {/* ====================== START TECH APPS ROW 2 ================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS API Gateway"
                src="/assets/AWS_APIGateway.svg"
              />
              <div>
                <div className={classes.techTitle}>API Gateway</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS Lambda"
                src="/assets/AWS_Lambda.svg"
              />
              <div>
                <div className={classes.techTitle}>Lambdas</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF TECH APPS ROW 2 ==================*/}
        {/* ====================== START TECH APPS ROW 3 ================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS RDS"
                src="/assets/AWS_RDS.svg"
              />
              <div>
                <div className={classes.techTitle}>Relational Databases</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container>
              <img
                className={classes.techIcon}
                alt="AWS DynamoDB"
                src="/assets/AWS_DynamoDB.svg"
              />
              <div>
                <div className={classes.techTitle}>No-SQL Database</div>
                <div className={classes.techDesc}>
                  Certralized user management, supporting user federation
                  authentication, across platforms and integrating backend
                  services.
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF TECH APPS ROW 3 ==================*/}
      </Grid>
      <Grid item>
        {" "}
        {/*-----Solutions Block-----*/}
        <Grid
          container
          direction="row"
          style={{ marginBottom: "10em" }}
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Real Solutions</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Technology and Innovation Collide
            </Typography>
            <Typography variant="subtitle1">
              Integrating serverless components to meet the business needs.
            </Typography>
            <Button
              component={Link}
              href="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="website icon"
              src="/assets/websiteIcon.svg"
            />
          </Grid>
        </Grid>
        {/* ====================== START SOLUTION 1 ================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ marginTop: "0" }}
        >
          <Grid item>
            <Grid item container>
              <img
                className={classes.solutionImage}
                alt="P8 Rally"
                src="/assets/P8RallySolution.png"
              />
              <div>
                <div className={classes.techTitle}>P8 Rally Event System</div>
                <div className={classes.techDesc}>
                  Full serverless solution, providing management of events,
                  leaders and participants.
                </div>
                <Button
                component={Link}
                href="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
              </div>
              
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF SOLUTION 1 ==================*/}
        {/* ====================== START SOLUTION 2 ================== */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ marginBottom: "5em", marginTop: "5em" }}
        >
          <Grid item>
            <Grid item container>
              <div>
                <div className={classes.techTitle}>Meeter Solution</div>
                <div className={classes.techDesc}>
                  Full serverless solution that allows an organization to plan,
                  manage and support meetings, which includes all planning
                  assignments, topical meetings during each event, as well as
                  leadership planning and development.
                </div>
                <Button
                  component={Link}
                  href="/websites"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                  }}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </div>
              <img
                className={classes.solutionImage}
                alt="Meeter Solution"
                src="/assets/MeeterSolution.png"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* ===================== END OF SOLUTION 2 ==================*/}
      </Grid>
    </Grid>
  );
}
