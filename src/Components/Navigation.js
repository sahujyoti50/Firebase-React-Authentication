import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <nav className="navBar">
            <h3>
                Welcome to My App!
            </h3>
            <Link className="link" to="/register">Register</Link>
            <Link className="link" to="/login">Login</Link>
        </nav>
    )
}