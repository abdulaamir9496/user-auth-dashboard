import { useState } from 'react';
import API from '../services/api';

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/login', form);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            alert('Login successful!');
            window.location.href = '/profile';
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 shadow-xl rounded-xl mt-10">
            <h2 className="text-2xl mb-4 font-bold">Login</h2>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <input
                name="email"
                onChange={handleChange}
                className="input mb-2"
                placeholder="Email"
            />
            <input
                name="password"
                type="password"
                onChange={handleChange}
                className="input mb-4"
                placeholder="Password"
            />
            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Login
            </button>
        </form>
    );
}

export default Login;
