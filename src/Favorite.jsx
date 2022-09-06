/// SECOND LESSON - Higher Order Components ///

import React from "react";

export default class Favorite extends React.Component {
    state = {
        isFavorited: false
    };
    toggleFavorite = () => {
        this.setState(prevState => {
            return { isFavorited: !prevState.isFavorited }
        });
    };
    render() {
        return(
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span
                        onClick={this.toggleFavorite}
                    >
                        {this.state.isFavorited ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        );
    };
};

/// END OF SECOND LESSON - Higher Order Components ///