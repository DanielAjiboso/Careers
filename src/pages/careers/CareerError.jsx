import { Link,useRouteError } from "react-router-dom";

export default function CareersError(){
    const error = useRouteError()
    return(
        <div className="career-error">
            <html>Error</html>
            <p>{error.message}</p>
            <Link to='/' >Back to Homepage</Link>
        </div>
    )
}