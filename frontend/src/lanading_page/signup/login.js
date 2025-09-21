import React, { useState } from 'react';
// import {  useNavigate } from 'react-router-dom';
function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    // const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Page reload ko rokein

        try {
            // Yahan hum backend ke /login endpoint par POST request bhej rahe hain
            const response = await fetch(']https://zerodha-clone-tfes.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                // Agar login successful hai, to user ko dashboard par bhejein
                alert(`hey..! ${data.user.username},Welcome back`);
                 localStorage.setItem("isLoggedIn", "true");
                window.location.href = "https://zerodha-clone-2-909g.onrender.com" ; // 'Home' component ka path, jo aapne banaya hai
            } else {
                const errorData = await response.json();
                alert(`Login failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <>
            <h1 className="offset-2 mt-5">Log in</h1>
            <div className="row">
                <div className="col-6 needs-validation offset-2" noValidate>
                    <form onSubmit={handleSubmit}> {/* form ka onSubmit event handle kar rahe hain */}
                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                id="username"
                                required
                                className="form-control"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass">Password</label>
                            <input
                                name="password"
                                type="password"
                                id="pass"
                                required
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Log in</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;