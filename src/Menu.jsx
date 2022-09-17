/// SECOND LESSON - Higher Order Components ///

import React from "react";
import { withToggler } from "./HOCs/withToggler.jsx";

class Menu extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} </button>
                <nav style={{ display: this.props.on ? "block" : "none" }}>
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
export default withToggler(Menu, {defaultOnValue: true});

/// END OF SECOND LESSON - Higher Order Components ///