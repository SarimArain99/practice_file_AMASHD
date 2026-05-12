"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function Dashboard() {
    const router = useRouter()
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn")
        if (!isLoggedIn) {
            router.push("/login")
        }
    }, [])
    return <h1>Welcome to Dashboard</h1>
}