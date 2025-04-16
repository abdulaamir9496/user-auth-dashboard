import { Link } from "react-router-dom";

function Navbar({ user }) {
    return (
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
            <Link to="/" className="font-bold">UserAuth</Link>
            <div className="space-x-4">
                {!user ? (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                ) : (
                    <Link to="/profile">Profile</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
