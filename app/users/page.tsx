

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

export default async function page() {
    const res = await fetch("http://localhost:3000/api/users")
    const users = await res.json()

    return (
        <div>
            <ul>
                {
                    users.map((user: any) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

