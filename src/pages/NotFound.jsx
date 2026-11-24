import { Link } from "react-router-dom";

function NotFound() {

    return (
        <div>
            <h1>404</h1>
            <p>Sidan kunde inte hittas</p>
            <Link to="/">Tillbaka till startsidan</Link>
        </div>
    )
}

export default NotFound