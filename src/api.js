


export async function getVans() {

    const res = await fetch("http://localhost:8080/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data;
}

export async function getVan(id) {
    const res = await fetch(`http://localhost:8080/vans/${id}`)
    if (!res.ok) {
        throw {
            message: `Failed to fetch van wit id : ${id}`,
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data;

}

export async function getHostVans() {

    const res = await fetch("http://localhost:8080/vans")
    if (!res.ok) {
        throw {
            message: `Failed to fetch host vans`,
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data;

}

export async function loginUser(creds){
    console.log(creds)
    const res= await fetch("http://localhost:8080/user/login",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:"POST",
        body:JSON.stringify(creds)
    })

    if(!res.ok){
        throw {
            message : "No found user...",
        }
    }
    const data=await res.json()
    return data;

}
