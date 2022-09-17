/// SECOND LESSON - Higher Order Components ///

import React from "react";
import { withToggler } from "./HOCs/withToggler.jsx";

class Favorite extends React.Component {
    render() {
        return(
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span
                        onClick={this.props.toggle}
                    >
                        {this.props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        );
    };
};
export default withToggler(Favorite, {defaultOnValue: false});

/// END OF SECOND LESSON - Higher Order Components ///