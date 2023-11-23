import mongoose from "mongoose"; 

mongoose.set('runValidators', true);

const propertySchema = new mongoose.Schema({
    image: {type: String},
    address: {type: String},
    type: {type: String},
    bedrooms: {type: Number},
    bathrooms: {type: Number},
    square_feet: {type: Number},
    price: {type: Number},
    description: {type: String},
},{
    strict: true
})

export default mongoose.models.property || mongoose.model('property', propertySchema);
