import dbConnect from "@/lib/dbconnect";
import userModel from "@/lib/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';


require('dotenv').config();

export async function POST(request) {
  let data = await request.json();
  
  console.log(data);

  await dbConnect();

  // Find the user
  const user = await userModel.findOne({ username: data.username });

  if (!user) {
    return NextResponse.error(400, 'Invalid username or password');
  }

  // Compare the passwords
  const isMatch = await bcrypt.compare(data.password, user.password);

  if (!isMatch) {
    return NextResponse.error(400, 'Invalid username or password'); // Corrected this line
  }

  // Generate a JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Send the token
  const response = NextResponse.json({ token });
  response.cookies.set('token', token, {
    path: '/',
    sameSite: 'strict',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}