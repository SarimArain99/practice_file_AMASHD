"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const handleLogin = async (e: any) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (data.success) {
            localStorage.setItem("isLoggedIn", "true")
            router.push("/dashboard")
        } else {
            alert("Invalid credentials")
        }
    }
    return (
        <form onSubmit={handleLogin}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button type="submit">Login</button>
        </form>
    )
}