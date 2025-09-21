import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Page reload ko rokein

        try {
            // Yahan hum backend ke /register endpoint par POST request bhej rahe hain
            const response = await fetch('http://localhost:3002/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
             alert(`${data.user.username} Registered successfully...!`);
                navigate('/login');
            } else {
                const errorData = await response.json();
                alert(`Registration failed: ${errorData.message}`);
            }
        } catch (error) {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <>
            <h1 className="offset-2 mt-5">Sign Up</h1>
            <div className="row">
                <div className="col-6 needs-validation offset-2" noValidate>
                    <form onSubmit={handleSubmit}> {/* form submit event is now handled by handleSubmit function */}
                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                type="text"
                                id="username"
                                required
                                className="form-control"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                required
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Sign Up</button>
                    </form>
                    <form>
                        <h6>If you already registered...? <Link className="active" to='/login'>Login</Link></h6>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;