import dbConnect from "@/lib/dbconnect";
import propertyModel from "@/lib/models/property.model";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";

// LOCALHOST

/*export async function GET() {

    
    await dbConnect();

    return propertyModel.find({}).then( (doc) => {

        return NextResponse.json(doc)

    } )
  

} */

export async function GET() {
  const db = await connectToDatabase();
  const collection = db.collection("properties");
  const data = await collection.find().toArray();

  return NextResponse.json(data);
}

/*
// ATLAS
export async function GET(res) {
  const db = await connectToDatabase();
  const collection = db.collection("properties");
  const data = await collection.find().toArray();

  res.status(200).json(data);
} */

/*
export async function GET() {
  await dbConnect();

  return propertyModel.find({}).then((doc) => {
    return NextResponse.json(doc);
  });
} */

export async function POST(request) {
  let data = await request.json();
  await dbConnect();

  return propertyModel.create(data).then((doc) => {
    return NextResponse.json(doc);
  });
}

export async function PUT(request) {
  let data = await request.json();

  console.log(data);

  await dbConnect();

  return propertyModel.findOneAndUpdate({ _id: data._id }, data).then((doc) => {
    return NextResponse.json(doc);
  });
}
