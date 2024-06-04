import dbConnect from "@/lib/dbconnect";
import userModel from "@/lib/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(request) {
  let data = await request.json();

  console.log(data);

  await dbConnect();

  //Find user
  const user = await userModel.findOne({ username: data.username });

  if (!user) {
    return new Response(
      JSON.stringify({ message: "Invalid username or password" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Compare the passwords
  const isMatch = await bcrypt.compare(data.password, user.password);

  if (!isMatch) {
    return new Response(
      JSON.stringify({ message: "Invalid username or password" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  //Cookie
  const serializedCookie = serialize("token", token, {
    path: "/",
    sameSite: "strict",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Ensure secure is true in production for HTTPS
  });

  // Token
  const headers = new Headers();
  headers.append("Set-Cookie", serializedCookie);
  headers.append("Content-Type", "application/json");

  return new Response(JSON.stringify({ token }), {
    status: 200,
    headers: headers,
  });
}
