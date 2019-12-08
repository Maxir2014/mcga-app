import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../Actions';
import './Login.css'
class Login extends React.Component {
    constructor(props) {
        super(props);


       console.log(this.props.loggedIn);
       //this.props.logout();
        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <div className="login">
                <div className="row container-fluid">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="login-container">
                                <div id="output"/>
                                <div className="avatar"/>
                                <div className="form-box">
                                    <form name="form" onSubmit={this.handleSubmit}>
                                        <div className='form-group'>
                                            <input type="text"
                                                   className="form-control"
                                                   name="email" value={email}
                                                   onChange={this.handleChange}
                                                   placeholder="Email"
                                            />
                                            {submitted && !email &&
                                            <div className="help-block has-error">Email is required</div>
                                            }
                                        </div>
                                        <div className='form-group'>
                                            <input type="password"
                                                   className="form-control"
                                                   name="password"
                                                   value={password}
                                                   onChange={this.handleChange}
                                                    placeholder="Password"
                                            />
                                            {submitted && !password &&
                                            <div className="help-block has-error">Password is required</div>
                                            }
                                        </div>
                                        <button className="btn btn-block login">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
;
function mapStateToProps(state) {
    const { loggingIn, loggedIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(Login);
export { connectedLoginPage as Login };