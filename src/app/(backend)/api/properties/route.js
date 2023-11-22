import dbConnect from "@/lib/dbconnect";
import propertyModel from "@/lib/models/post.model";
import { NextResponse } from "next/server";


export async function GET() {

    await dbConnect();

    return propertyModel.find({}).then( (doc) => {

        return NextResponse.json(doc)

    } )


}

export async function POST(request) {

    let data = await request.json();

    await dbConnect();

    return propertyModel.create(data).then( (doc) => {

        return NextResponse.json(doc)

    } )


}

export async function PUT(request) {

    let data = await request.json();

    console.log(data)

    await dbConnect();

    return propertyModel.findOneAndUpdate({_id : data._id}, data).then( (doc) => {

        return NextResponse.json(doc)

    } )


}