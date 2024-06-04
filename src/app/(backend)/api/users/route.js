import dbConnect from "@/lib/dbconnect";
import userModel from "@/lib/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';


export async function GET() {

    
    await dbConnect();

    return userModel.find({}).then( (doc) => {

        return NextResponse.json(doc)

    } )
  

}


export async function POST(request) {

    let data = await request.json();

    //bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;

    await dbConnect();

    return userModel.create(data).then( (doc) => {

        return NextResponse.json(doc)

    } )


}