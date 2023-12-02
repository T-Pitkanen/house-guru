import dbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";


export async function GET() {



    let mockData = [
        {
            "address": "1234 Elm Street",
            "location":"Cityville",
            "type": "House",
            "bedrooms": 4,
            "bathrooms": 3,
            "square_meters":232,
            "price": "450,000",
            "description": "House with 4 bedrooms and 3 bathrooms",
            "image":"/properties/house-dining.jpg",
            "images": [
                {"id":"1", "src": "/properties/house-dining.jgp"},
                {"id":"2", "src": "/properties/house-dining.jgp"},
                {"id":"3", "src": "/properties/house-dining.jgp"},
                {"id":"4", "src": "/properties/house-dining.jgp"},
                {"id":"5", "src": "/properties/house-dining.jgp"}
            ],
            "info": [
                "A detached house completed in 2014 in Cityville in a residential area popular with families with children. Good and functional floor plan, high space in the living room, which brings space.",
                "The kitchen has carefully thought-out home appliance solutions, and the spare fireplace located between the living room and the kitchen brings comfortable warmth to a large area. The apartments water-circulating floor heating is comfortable for the feet and is heated by an exhaust air heat pump.",
                "There is an exit from the utility room to a large L-shaped sunny terrace. There is a jacuzzi on the terrace, which the current residents have kept ready for use and warm all year round. The yard area is really cozy and the bushes and plantings have already grown well.",
                "This home is worth seeing on the spot. Please contact the broker immediately!"
            ]
        }
    ]


    return NextResponse.json(mockData[0])


}