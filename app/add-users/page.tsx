"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function page() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const router = useRouter()

    const handleSubmission = async (e: any) => {
        e.preventDefault()
        await fetch("http://localhost:3000/api/users", {
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: { "content-type": "application/json" }
        })
        router.push("/users")

    }
    return (
        <form onSubmit={handleSubmission}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <button type="submit">Add User</button>
        </form>
    )
}
