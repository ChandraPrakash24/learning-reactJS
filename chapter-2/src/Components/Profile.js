import { useState } from "react";
// import { Route } from "react-router-dom";

const Profile = (props) => {
  const [count, setCount] = useState(1);
  const [countTwo, setCountTwo] = useState(2);
  return (
    <div> 
    <h3>This is a Profile Functional</h3>
    <h4>name: {props.name}</h4>
    <h4>xyz: {props.xyz}</h4>
    <h4>Count: {count}</h4>
    <button onClick={()=>{
        setCount(count+1)
        setCountTwo(countTwo+1)
      }}>Click</button>
    <h4>Count: {countTwo}</h4>
    </div>
  )
}

export default Profile;