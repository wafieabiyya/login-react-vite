import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{
    const erorr = useRouteError();

    return(
        <div className="flex min-h-screen items-center flex-col justify-center">
            <h1 className="font-bold text-3xl">Oops!</h1>
            <p>{erorr.statusText || erorr.message}</p>
            <p>An unexpected erorr has occured</p>
        </div>
    )
}

export default ErrorPage;