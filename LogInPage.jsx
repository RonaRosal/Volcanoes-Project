import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function LoginPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const login = () => {
        const url = "http://sefdb02.qut.edu.au:3001/user/login";

        return fetch(url, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: `${email}`, password: `${password}` }),
        })
            .then((res) => res.json())
            .then((res) => localStorage.setItem("token", res.token));
    };

   
    return (
        <div>
            <button
                color="info"
                size="sm"
                className="mt-3"
                onClick={() => navigate("/")}
            >
                Back
            </button>

            <form>
                <h1>Log-In Page</h1>
                <p> Please provide email and password to log-in.</p>

            <input
                type="text"
                name="email"
                id="Email"
                placeholder="Email"
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
                </form>
            <form>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={(event1) => {
                    setPassword(event1.target.value);
                }}
            />
                </form>

            <button onClick={login}>Login</button>
           
        </div>
    );
}