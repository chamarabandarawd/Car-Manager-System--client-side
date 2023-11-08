import { redirect } from "react-router-dom"


export async function requireAuth(){
    // const isLoggedIn=localStorage.getItem("loggedin")
    const isLoggedIn=localStorage.getItem("loggedin")
    console.log(isLoggedIn)

    if(!isLoggedIn){
        throw redirect("/login?message=You must login first")
    }
    return null
}