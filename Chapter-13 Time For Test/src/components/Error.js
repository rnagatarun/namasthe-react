import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="error">
            <h1>Error {error.status || "Unknown"}</h1>
            <h2>{error.statusText || "Something went wrong!"}</h2>
            <p>{error.message || "An unexpected error occurred."}</p>
            <p>If you need assistance, please contact support.</p>
            <p>Thank you for your understanding!</p>
        </div>
    )
}

export default Error;