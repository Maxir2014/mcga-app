import React from 'react';
import { connect } from 'react-redux';
import './Home.css'
class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    handleChange(e) {

    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <h1>hi im the home page</h1>
        );
    }
}

function mapState(state) {

}

const actionCreators = {

};

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };