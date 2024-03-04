import { Outlet, Route } from "react-router-dom";
import ProfileFunComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";

const About = () => {
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

export default About;