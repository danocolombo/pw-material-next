import { React, useState, Fragment } from "react";
import axios from "axios";
import Link from "../src/Link";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: "/assets/background.jpg",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "/assets/mobileBackground.jpg",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
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
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone Number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        "https://us-central1-dcolombo-material.cloudfunctions.net/sendAnEmail",
        {
          params: {
            email: email,
            name: name,
            phone: phone,
            message: message,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ open: true, color: "#FF3232" });
        setAlertMesssage("Something went wrong! Please try again.");
        console.error(err);
      });
  };
  const buttonContents = (
    <Fragment>
      Send Message
      <img
        src="/assets/send.svg"
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </Fragment>
  );
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        justify="center"
        alignItems="center"
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Me
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                I'm waiting
              </Typography>
            </Grid>
            {/* <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone image"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a href="tel:7066042494" style={{textDecoration: "none", color:"inherit"}}>(706) 604-2494</a>
                </Typography>
              </Grid>
            </Grid> */}
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="email"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:dano.colombo@gmail.com"
                    target="_new"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    dano.colombo@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  fullWidth
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  value={email}
                  // onChange={(event) => setEmail(event.target.value)}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                  //onChange={(event) => setPhone(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                id="message"
                fullWidth
                className={classes.message}
                value={message}
                multiline
                rows={10}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                onClick={() => setOpen(true)}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                fullWidth
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                id="email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                value={email}
                // onChange={(event) => setEmail(event.target.value)}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                id="phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                value={phone}
                onChange={onChange}
                //onChange={(event) => setPhone(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              id="message"
              fullWidth
              className={classes.message}
              value={message}
              multiline
              rows={10}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                // onClick={() => setOpen(true)}
                onClick={onConfirm}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alertMessage}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
                align={matchesMD ? "center" : undefined}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid container justify={matchesMD ? "center" : undefined} item>
                <Button
                  component={Link}
                  href="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => props.setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
