import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
//import InputLabel from "@material-ui/core/InputLabel";
//import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PaymentForOne() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const [state, setState] = React.useState({
    maths: true,
    bio: false,
    phy: false,
    chem: false,
    it: false,
  });

  const handleChangeMedium = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Mobile Number"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Select your subjects</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gilad}
                      onChange={handleChange}
                      name="maths"
                    />
                  }
                  label="C.Mathematics"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jason}
                      onChange={handleChange}
                      name="bio"
                    />
                  }
                  label="Biology"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={handleChange}
                      name="phy"
                    />
                  }
                  label="Physics"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={handleChange}
                      name="chem"
                    />
                  }
                  label="Chemistry"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={handleChange}
                      name="it"
                    />
                  }
                  label="IT"
                />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop: "4%" }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Medium</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChangeMedium}
            >
              <FormControlLabel
                value="english"
                control={<Radio />}
                label="English"
              />
              <FormControlLabel
                value="tamil"
                control={<Radio />}
                label="Tamil"
              />
              <FormControlLabel
                value="sinhala"
                control={<Radio />}
                label="Sinhala"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this details for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
