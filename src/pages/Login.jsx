import React, { useEffect, useState } from "react"
import { useLoaderData, useLocation} from "react-router-dom"
import { loginUser } from "../api";

export async function loader({location}){
    return null
}

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const location = useLocation();
    const [status,setStatus]=useState("idle")
    const [error,setError]=useState(null)
    const message="";

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setStatus("submitting")
            setError(null)
            const data = await loginUser(loginFormData)
            console.log(data)
        }catch(err){
            setError(err)

        }finally{
            setStatus("idle")
        }
        
       
        
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container container ">
            {message && <h1>{message}</h1>}
            <h1>Sign in to your account</h1>
            {error && <h1>{error.message}</h1>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status==="submitting"} >
                    {status==="submitting" ?  " Logging in..." :"Log in" }
                    </button>
            </form>
        </div>
    )

}