import React, { useEffect, useState } from "react"
import { useLoaderData, useLocation,Form} from "react-router-dom"
import { loginUser } from "../api";

export async function loader({location}){
    return null
}

export async function action({request}){
    const formData= await request.formData()
    const email=formData.get("email")
    const password=formData.get("password")
    const data = await loginUser({email,password})
    console.log(data)
    localStorage.setItem("loggedin",true)
    
    return null 
}

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const location = useLocation();
    const [status,setStatus]=useState("idle")
    const [error,setError]=useState(null)
    const message="";


   
    return (
        <div className="login-container container ">
            {message && <h1>{message}</h1>}
            <h1>Sign in to your account</h1>
            {error && <h1>{error.message}</h1>}
            <Form method="post" className="login-F">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
        
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={status==="submitting"} >
                    {status==="submitting" ?  " Logging in..." :"Log in" }
                    </button>
            </Form>
        </div>
    )

}