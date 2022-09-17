/// SECOND LESSON - Higher Order Components ///

import React from "react";

class Toggler extends React.Component {
    state = {
        on: this.props.defaultOnValue
    };
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            };
        });
    };
    render () {
        const {component: Component, defaultOnValue, ...props} = this.props;
        return (
            <Component on={this.state.on} toggle={this.toggle} {...props} />
        );
    };
};
export const withToggler = (component, optionsObj) => {
    const Component = component;
    return (props) => {
        return (
            <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props}/>
        );
    };
};

/// END OF SECOND LESSON - Higher Order Components ///