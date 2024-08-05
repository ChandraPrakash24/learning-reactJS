import { Outlet, Route } from "react-router-dom";
import ProfileFunComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";
import { Component } from "react";

// const About = () => {
//   return (
//     <div>
//         <h1>About us Page</h1>
//         <p>
//         this is the about us page Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem temporibus sapiente culpa voluptatem quos nulla similique quam explicabo saepe labore odio dignissimos eveniet, eum soluta adipisci porro perferendis deleniti vitae!</p>
//         <Outlet />

//         <ProfileFunComponent name={"cpgl"} xyz={"abc"} />
//         <ProfileClassComponent name={"cpgl-class"} xyz={"abc"} />

//         {/* <Route path="/about/:name" render={(props) => <ProfileFunComponent name={props.match.params.name} />} /> */}

//     </div>
//   )
// }

// export default About;

class AboutClass extends Component {

  constructor(props) {
    super(props);
    console.log('Parent - Constructor');
  }

  componentDidMount() {
    console.log('Parent - Mount');
  }

  render() {
    console.log('Parent - render');
      return (
        <div>
            <h1>About us Page</h1>
            <p>
            this is the about us page Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem temporibus sapiente culpa voluptatem quos nulla similique quam explicabo saepe labore odio dignissimos eveniet, eum soluta adipisci porro perferendis deleniti vitae!</p>
            <Outlet />
    
            <ProfileFunComponent name={"cpgl"} xyz={"abc"} />
            <ProfileClassComponent name={"cpgl-class"} xyz={"abc"} />
    
            {/* <Route path="/about/:name" render={(props) => <ProfileFunComponent name={props.match.params.name} />} /> */}
    
        </div>
      )
  }
}

export default AboutClass;


// Parent - Constructor
// About.js:37 Parent - render
//   ProfileClass.js:13 Child - Constructor
//   ProfileClass.js:24 Child - Render
//   ProfileClass.js:19 Child - Mount
// About.js:33 Parent - Mount

// FOR TWO CHILD:-

/**
 * 
 * Parent - constructor
 * Parent - Render
 *    Child1 - Cnstructor
 *    Child1 - Render
 *    Child2 - Constructor
 *    Child2 - Render
 *    Child1 - Mount
 *    Child2 - Mount
 * Parent - Mount
 * 
*/