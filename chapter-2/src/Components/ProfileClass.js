import React from "react";
import { Route } from "react-router-dom";

// classKeyWord class-name extendKeywodToInheritProopertiesOfReactComponent React.component
class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            countTwo: 2,
        };
    };


    componentDidMount() {
        // best place for api call
    }

    // render() { return (<>jsx</>) } it is only compolosury method other then from import
    render() {
        // const {count} = this.state;
        return (
        <div>
            <h1>
                This is a profile CLASS based Component
            </h1>
            <h4>Name: {this.props.name}</h4>
            <h4>xyz: {this.props.xyz}-class</h4>
            <h4>Count: {this.state.count}</h4>
            {/* <h4>Count: {count}</h4> */}
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                    countTwo: this.state.countTwo+1
                })
            }}>Cls-btn</button>
            <h4>Count: {this.state.countTwo}</h4>
            {/* <h4>{this.props.match.params.name}</h4> */}
        </div>
        );
    }
}

export default ProfileClass;