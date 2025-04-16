import { useState } from 'react';
import API from '../services/api';

function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/register', form);
            alert('Registered successfully!');
        } catch (err) {
            alert('Error: ' + err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 shadow-xl rounded-xl">
            <h2 className="text-2xl mb-4 font-bold">Register</h2>
            <input name="name" onChange={handleChange} className="input" placeholder="Name" />
            <input name="email" onChange={handleChange} className="input" placeholder="Email" />
            <input name="password" type="password" onChange={handleChange} className="input" placeholder="Password" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Register</button>
        </form>
    );
}

export default Register;
