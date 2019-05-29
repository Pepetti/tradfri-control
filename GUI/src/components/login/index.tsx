import React, { FormEvent } from "react";
import { connect } from "react-redux";

import { login, attemptLogin } from "../../store/login/actions";

import LoginDrawer from "./LoginDrawer";
import LoginBar from "./LoginBar";
import BackDrop from "../backdrop/BackDrop";
import LoginForm from "./LoginForm";

export type updateFormField = React.SyntheticEvent<{ value: string }>;

interface LoginWindowProps {
  login: typeof login;
  attemptLogin: typeof attemptLogin;
}

class LoginWindow extends React.Component<LoginWindowProps> {
  state = {
    showDrawer: false,
    userName: "",
    password: ""
  };

  //Function to toggle drawer
  drawerToggle = () => {
    this.setState({ showDrawer: !this.state.showDrawer });
  };

  //Function to close drawer when backdrop is clicked
  backDropClick = () => {
    this.setState({ showDrawer: false });
  };

  //On user name change on form
  updateUser = (event: updateFormField) => {
    this.setState({ userName: event.currentTarget.value });
  };

  //On password change on form
  updatePass = (event: updateFormField) => {
    this.setState({ password: event.currentTarget.value });
  };

  //Logs the user in
  login = (e: FormEvent) => {
    e.preventDefault();
    this.props.attemptLogin(this.state.userName);
  };

  render() {
    let backDrop;
    //If drawer flag is true display the backdrop
    if (this.state.showDrawer) {
      backDrop = <BackDrop click={this.backDropClick} />;
    } else {
      backDrop = null;
    }

    return (
      <div>
        <LoginBar click={this.drawerToggle} />
        <LoginDrawer show={this.state.showDrawer} />
        <main style={{ marginTop: "64px" }}>
          <LoginForm
            userName={this.state.userName}
            password={this.state.password}
            updateUser={this.updateUser}
            updatePass={this.updatePass}
            login={this.login}
          />
        </main>
        {backDrop}
      </div>
    );
  }
}

export default connect(
  null,
  { login, attemptLogin}
)(LoginWindow);
