import { useEffect, useState } from 'react';
import API from '../services/api';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userInfo = localStorage.getItem('user');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">User Profile</h2>
            {user ? (
                <>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button
                        onClick={handleLogout}
                        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <p>No user info found.</p>
            )}
        </div>
    );
}

export default Profile;
