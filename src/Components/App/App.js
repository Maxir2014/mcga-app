//dependencies

import React, { Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../Utils';
import { alertActions } from '../../Actions';
import { PrivateRouteRender } from '../PrivateRouteRender';


//components

import { Login } from '../../Components/Login';
import {Backdrop, NavBar} from "../Menu";
import {Header} from "../Header";
import {Home} from "../Home";

//styling

import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }
    state = {
        sideDrawerOpen: false
    };
    drawerToggleClickHandler = () => {
        this.setState((prevState)=> {
            return {sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    };
    backdropClickHandler = () => {

        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backDrop = null;
        if(this.state.sideDrawerOpen){
            backDrop = <Backdrop click={this.backdropClickHandler}/>
        }
        const { alert } = this.props;
        return (

                <Router history={history}>
                        <Header drawerClickHandler={this.drawerToggleClickHandler} />
                        <NavBar show={this.state.sideDrawerOpen}/>
                        {backDrop}
                        <main className="dashboard">
                            <Switch>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <PrivateRouteRender exact path="/home" component={Home} />
                                    <Route exact path="/login" component={Login} />
                                    {/*<Route path="/register" component={RegisterPage} />*/}
                                    <Redirect from="*" to="/" />
                                </Suspense>
                            </Switch>
                        </main>

                </Router>

        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };