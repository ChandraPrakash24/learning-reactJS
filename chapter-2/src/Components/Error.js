import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
        <h1>Opps !!</h1>
        <h2>Somthing went wrong</h2>
        <h2>{err?.status + " : " + err?.statusText + " : " + err?.error?.message + " : " + err?.internal}</h2>
    </div>
  );
};

export default Error;