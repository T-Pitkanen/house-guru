import dbConnect from "@/lib/dbconnect";
import postModel from "@/lib/models/post.model";
import { NextResponse } from "next/server";


export async function GET() {

    await dbConnect();

    return postModel.find({}).then( (doc) => {

        return NextResponse.json(doc)

    } )


}

export async function POST(request) {

    let data = await request.json();

    await dbConnect();

    return postModel.create(data).then( (doc) => {

        return NextResponse.json(doc)

    } )


}

export async function PUT(request) {

    let data = await request.json();

    console.log(data)

    await dbConnect();

    return postModel.findOneAndUpdate({_id : data._id}, data).then( (doc) => {

        return NextResponse.json(doc)

    } )


}