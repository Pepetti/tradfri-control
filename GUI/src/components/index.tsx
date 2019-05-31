import React from 'react';
import {connect} from 'react-redux';

import {AppState} from '../store';
import {loginState} from '../store/login/types';
import {logout} from '../store/login/actions';

import Header from './header/Header';
import HubForm from './hubform/hubform';

interface MainViewProps {
    logged: loginState;
    logout: typeof logout;
}

export type updateFormField = React.SyntheticEvent<{value: string}>;

class MainView extends React.Component<MainViewProps> {
    state = {
        hubip: '',
        hubkey: '',
    };

    //Logs the user out
    logout = () => {
        var d = new Date();
        this.props.logout({
            loggedin: false,
            user: {
                userName: this.props.logged.user.userName,
                loggedinAt: this.props.logged.user.loggedinAt,
                loggedOutAt: d.getTime(),
            },
        });
    };

    //Updates hubip from form
    updateIp = (event: updateFormField) => {
        this.setState({hubip: event.currentTarget.value});
    };

    //Updates hubkey from form
    updateKey = (event: updateFormField) => {
        this.setState({hubkey: event.currentTarget.value});
    };

    render() {
        return (
            <div>
                <Header logout={this.logout} />
                <main style={{marginTop: '64px'}}>
                    <HubForm
                        hubip={this.state.hubip}
                        hubkey={this.state.hubkey}
                        updateIp={this.updateIp}
                        updateKey={this.updateKey}
                    />
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    logged: state.logged,
});

export default connect(
    mapStateToProps,
    {logout},
)(MainView);
