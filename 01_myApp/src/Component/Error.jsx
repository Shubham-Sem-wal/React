import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return <>
    <div className="error-div">
        <h3>Oops!!! Somehting went wrong ...</h3>
        <h4 style={{color:"red"}}>{err.status} {err.statusText}</h4>
    </div>
    </>
}

export default Error;