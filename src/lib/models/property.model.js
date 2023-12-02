import mongoose from "mongoose"; 

mongoose.set('runValidators', true);

const propertySchema = new mongoose.Schema({
    // _id: {type: String},
    image: {type: String},
    address: {type: String},
    location: {type: String},
    type: {type: String},
    bedrooms: {type: Number},
    bathrooms: {type: Number},
    square_meters: {type: Number},
    price: {type: String},
    description: {type: String},
    images: {type: Array},
    info: {type: Array},
},{
    strict: true
})

export default mongoose.models.property || mongoose.model('property', propertySchema);
