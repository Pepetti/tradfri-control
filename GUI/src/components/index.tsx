import React from "react";
import { connect } from "react-redux";

import { AppState } from "../store";
import { loginState } from "../store/login/types";
import { logout } from "../store/login/actions";

import Header from "./header/Header";
import HubForm from "./hubform/hubform";

interface MainViewProps {
  logged: loginState;
  logout: typeof logout;
}

class MainView extends React.Component<MainViewProps> {
  //Logs the user out
  logout = () => {
    var d = new Date();
    this.props.logout({
      loggedin: false,
      user: {
        userName: this.props.logged.user.userName,
        loggedinAt: this.props.logged.user.loggedinAt,
        loggedOutAt: d.getTime()
      }
    });
  };

  render() {
    return (
      <div>
        <Header logout={this.logout} />
        <main style={{ marginTop: "64px" }}>
          <HubForm />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  logged: state.logged
});

export default connect(
  mapStateToProps,
  { logout }
)(MainView);
