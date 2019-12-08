//dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
export class NavBar extends Component {
    render() {
        let sideClass;
        if(this.props.show === true) {
            sideClass = 'side-drawer open'
        }else{
            sideClass = 'side-drawer';
        }
        return(
            <nav className={sideClass}>
                <ul>
                    <li>
                        <Link to={"/home"}> home </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
