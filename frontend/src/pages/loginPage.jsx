import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function LoginPage(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function handleLogin(){
        console.log("Email:", email);
        console.log("Password:", password);

        //backend localhost:3000/api/users/login
        axios.post(import.meta.env.VITE_API_URL + "/users/login", {
             email : email,
            password : password 
        }).then((response) => {
            console.log("Login successful:", response.data);
            
        }).catch((error) => {
            console.error("Login failed:", error);
        });
    }

    return(
        <div className="w-full h-screen flex justify-center items-center bg-[url('/login-bg.jpg')] bg-center bg-cover">
           <div className="w-1/2 h-full">

           </div>

           <div className="w-1/2 h-full flex justify-center items-center">
                <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl shadow-2xl flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-accent mb-4">Sign In</h1>
                    <input 
                        onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }
                        value={email}
                        placeholder="Email" 
                        className="w-3/4 p-3 mb-6 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-accent" 
                        />
                    <input 
                            onChange={
                                (e) => {
                                    setPassword(e.target.value)
                                }
                            }
                        value={password}
                        type="password" 
                        placeholder="Password" 
                        className="w-3/4 h-12 mb-4 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent" 
                        />
                    <p className="mb-6 w-3/4 text-right text-white">Forget password? <Link to="/forgot-password" className="text-accent hover:underline">Click here</Link></p>
                    <button onClick={handleLogin}
                         className="w-3/4 h-12 bg-accent text-white rounded-lg hover:bg-accent-dark transition duration-300">
                            Sign in
                    </button >
                    <p className="mt-6 text-white">Don't have an account? <Link to="/register" className="text-accent hover:underline">Sign up</Link></p>

                </div>
           </div>
        </div>
    )
}