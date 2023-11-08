import React, { useEffect, useState } from "react"
import { useLoaderData, useLocation, Form, redirect } from "react-router-dom"
import { loginUser } from "../api";

export async function loader({ request }) {

    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({ email, password })
    console.log(data)
    localStorage.setItem("loggedin", true)
    return redirect("/host")

}

export default function Login() {
    const location = useLocation();
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)

    const message = useLoaderData()



    return (
        <div className="login-container container ">
            {message && <h1>{message}</h1>}
            <h1>Sign in to your account</h1>
            {error && <h1>{error.message}</h1>}
            <Form
                replace
                method="post"
                className="login-F">
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
                <button disabled={status === "submitting"} >
                    {status === "submitting" ? " Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )

}