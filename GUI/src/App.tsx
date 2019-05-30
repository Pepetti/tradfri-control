import React from 'react';
import {connect} from 'react-redux';
import {AppState} from './store';

import {loginState} from './store/login/types';

import LoginWindow from './components/login';
import MainView from './components';

interface AppProps {
    logged: loginState;
}

class App extends React.Component<AppProps> {
    render() {
        let rend: any;
        if (!this.props.logged.loggedin) {
            rend = (
                <div className="LoginWindow">
                    <LoginWindow />
                </div>
            );
        } else {
            rend = (
                <div className="view">
                    <MainView />
                </div>
            );
        }
        return (
            <div className="App" style={{height: '100%'}}>
                {rend}
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    logged: state.logged,
});

export default connect(
    mapStateToProps,
    null,
)(App);
