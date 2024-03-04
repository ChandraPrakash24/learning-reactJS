import React from "react";
import { Route } from "react-router-dom";

// classKeyWord class-name extendKeywodToInheritProopertiesOfReactComponent React.component
class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    };

    // render() { return (<>jsx</>) } it is only compolosury method other then from import
    render() {
        return (
        <div>
            <h1>
                This is a profile CLASS based Component
            </h1>
            <h4>Name: {this.props.name}</h4>
            <h4>xyz: {this.props.xyz}-class</h4>
            <h4>Count: {this.state.count}</h4>
            {/* <h4>{this.props.match.params.name}</h4> */}
        </div>
        );
    }
}

export default ProfileClass;