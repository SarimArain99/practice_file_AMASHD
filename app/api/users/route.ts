const users = [
  {
    id: 1,
    name: "Sarim",
    username: "sarim_arain",
    email: "abc@xyz.com",
    address: {
      street: "xyz",
      city: "Shahdadpur",
      zip: 68030,
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
  },
];

export async function GET() {
  return Response.json(users);
}

// default 

export async function POST(req: Request) {
  const body = await req.json();

  const newUser = {
    id: users.length + 1,
    name: body.name,
    username: body.username,
    email: body.email,
    address: {
      street: body.street,
      city: body.city,
      zip: body.zip,
      geo: {
        lat: body.lat,
        lng: body.lng,
      },
    },
  };

  users.push(newUser);
  return Response.json(newUser);
}
