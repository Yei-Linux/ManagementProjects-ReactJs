import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import clsx from "clsx";
import { signInStyles } from "./SignMaterialStyle";
import PasswordInput from '../commons/password-input/PasswordInput';
import { useHistory } from "react-router-dom";

function SignIn(props) {
  const history = useHistory();
  const classes = signInStyles();

  const redirectSignUp = () => {
    history.push("/signup");
  };

  const onSubmitForm = e => {
    e.preventDefault();
    localStorage.setItem("user_info","exampleToken");
    history.push("/home");
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <form onSubmit = {onSubmitForm} className={classes.form} noValidate autoComplete="off">
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                label="User"
                className={clsx(classes.input)}
                id="margin-normal"
                helperText="Put your email"
                margin="normal"
              />
            </FormControl>
            <FormControl className={clsx(classes.formControl)}>
              <PasswordInput inputClass={classes.input} />
            </FormControl>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              type = "submit"
            >
              SignIn
            </Button>
          </form>

          <Chip
            onClick = {redirectSignUp}
            className={classes.chip}  
            icon={<FaceIcon />}
            label="SignUp"
            clickable
            color="primary"
            deleteIcon={<DoneIcon />}
            variant="outlined"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SignIn;