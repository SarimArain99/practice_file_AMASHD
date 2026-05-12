export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@gmail.com" && password === "1234") {
    return Response.json({ success: true });
  }
  return Response.json({ success: false }, { status: 401 });
}
