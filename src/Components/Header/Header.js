//dependencies
import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

//styling
import './Header.css';

//components
import { ToggleButton } from '../Menu';

export class Header extends Component {
    render() {
        const isLoggedIn = false;
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div>
                        <ToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="toolbar__logo"><a href="/">LOGO</a></div>
                    <div className="spacer"/>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <div>
                                {isLoggedIn ? (
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <a className="nav-link" onClick={Header.handleLogout}> Logout </a>
                                ) : (
                                    <>
                                        <Link to={"/login"}> Login </Link>
                                    </>
                                )}
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>

        );
    }
}
