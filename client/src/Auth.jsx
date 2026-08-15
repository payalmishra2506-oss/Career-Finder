import { useState } from "react";

function Auth({ onLogin, onBack }) {

    const [isRegister, setIsRegister] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setMessage("");
        setLoading(true);

        try {

            const url = isRegister
                ? "http://localhost:5000/api/auth/register"
                : "http://localhost:5000/api/auth/login";


            const body = isRegister
                ? { name, email, password }
                : { email, password };


            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });


            const data = await response.json();


            if (!response.ok) {

                setMessage(data.message || "Something went wrong.");

                setLoading(false);

                return;
            }


            if (isRegister) {

                setMessage(
                    "Account created successfully! You can now login."
                );

                setIsRegister(false);

                setName("");
                setPassword("");

            } else {

                setMessage("Login successful!");

                onLogin(data.user);

            }

        } catch (error) {

            console.error(error);

            setMessage(
                "Cannot connect to server. Make sure the backend is running."
            );

        }

        setLoading(false);
    };


    return (
        <div className="auth-page">

            <div className="auth-card">

                <button
                    className="back-btn"
                    onClick={onBack}
                >
                    ← Back
                </button>


                <div className="auth-header">

                    <div className="auth-logo">
                        Career<span>Finder</span>
                    </div>

                    <h1>
                        {isRegister
                            ? "Create Your Account"
                            : "Welcome Back"}
                    </h1>

                    <p>
                        {isRegister
                            ? "Create an account to discover your perfect career."
                            : "Login to continue your career journey."}
                    </p>

                </div>


                <form onSubmit={handleSubmit}>

                    {isRegister && (

                        <div className="form-group">

                            <label>
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required
                            />

                        </div>

                    )}


                    <div className="form-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                    </div>


                    {message && (

                        <div className="auth-message">
                            {message}
                        </div>

                    )}


                    <button
                        type="submit"
                        className="start-btn auth-submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Please wait..."
                            : isRegister
                                ? "Create Account →"
                                : "Login →"}
                    </button>

                </form>


                <div className="auth-switch">

                    {isRegister
                        ? "Already have an account?"
                        : "Don't have an account?"}

                    <button
                        type="button"
                        onClick={() => {
                            setIsRegister(!isRegister);
                            setMessage("");
                        }}
                    >
                        {isRegister
                            ? " Login"
                            : " Register"}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Auth;