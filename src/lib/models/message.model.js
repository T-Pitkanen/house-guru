import mongoose from "mongoose"; 

mongoose.set('runValidators', true);

const messageSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    number: {type: Number},
    message: {type: String},
},{
    strict: true
})

export default mongoose.models.message || mongoose.model('message', messageSchema);
