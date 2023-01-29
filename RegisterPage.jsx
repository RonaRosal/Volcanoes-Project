import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(); // ERRO HANDLING


    const registerUser = () => {

        const url = "http://sefdb02.qut.edu.au:3001/user/register"


        return fetch(url, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: `${ email }`, password: `${password}` })
        })
            .then((res) => res.json())
            .then((res) => setMessage(res))
    }


    return (
        <div className="container">
           
            <button
                color="info"
                size="sm"
                className="mt-3"
                onClick={() => navigate("/")}
            >
                Back
            </button>
            
                <form>
            <h2> Register Page</h2>
                <p> Please provide an email and password to register as a user.</p>
                <div> {JSON.stringify(message)}</div>

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

            <button onClick={registerUser}>Register</button>
            
            
            </div>
    );

}


