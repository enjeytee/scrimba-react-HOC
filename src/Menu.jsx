/// SECOND LESSON - Higher Order Components ///

import React from "react";

export default class Menu extends React.Component {
    state = {
        show: true
    }
    toggleShow = () => {
        this.setState(prevState => {
            return { show: !prevState.show }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} </button>
                <nav style={{ display: this.state.show ? "block" : "none" }}>
                    <h6>Signed in as CoderJohn</h6>
                    <a>Your profile</a>
                    <a>Your repositories</a>
                    <a>Your stars</a>
                    <a>Your gists</a>
                </nav>
            </div>
        )
    }
};

/// END OF SECOND LESSON - Higher Order Components ///