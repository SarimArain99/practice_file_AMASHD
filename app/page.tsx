"use client"
import { useFetchData } from "./hooks/useFetchData"

interface UserDataType {
  id: number | string
  name: string
  username: string
  email: string
  address: {
    street: string
    city: string
    zip: number | string
    geo: {
      lat: number
      lng: number
    }
  }
}

export default function page() {
  let myAPI = process.env.NEXT_PUBLIC_OPENAI_API_KEY
  const myData = useFetchData("http://localhost:3000/api/users")

  return (
    <div>
      {myData.map((user: UserDataType) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <h2>{user.username}</h2>
          <h2>{user.email}</h2>
          <h2>{user.address.city}</h2>
          <h2>{user.address.zip}</h2>
          <h2>{user.address.street}</h2>
          <h2>{user.address.geo.lat}</h2>
          <h2>{user.address.geo.lng}</h2>


        </div>
      ))}
    </div>
  )
}
