import React from "react"
import { useLoaderData,  Form, redirect, useActionData ,useNavigation} from "react-router-dom"
import { loginUser } from "../api";


export async function loader({ request }) {

    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try{
        const data = await loginUser({ email, password })
        console.log(data)
        localStorage.setItem("loggedin", true)
        return redirect("/host")
    }catch(err){

        return err.message
    }
   

}

export default function Login() {
    const errMessage=useActionData()
    const message = useLoaderData()
    const navigation=useNavigation();



    return (
        <div className="login-container container ">
            {message && <h3>{message}</h3>}
            <h2>Sign in to your account</h2>
            {errMessage && <h5 style={{ color: 'red'}}>{errMessage}</h5>}
            <Form 
                replace
                method="post"
                className="login-F">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="home-button"

                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="home-button"
                />
                <button disabled={navigation.state==="submitting"} 
                className="home-button">
                    {navigation.state === "submitting" ? " Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )

}