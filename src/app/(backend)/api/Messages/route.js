import { MongoClient } from 'mongodb';
import dbConnect from "@/lib/dbconnect";
import messageModel from '@/lib/models/message.model';
import { NextResponse } from "next/server";


export async function POST(request) {

   
    let data = await request.json();
    await dbConnect();

    return messageModel.create(data).then( (doc) => {

        return NextResponse.json(doc)

    } )


}

