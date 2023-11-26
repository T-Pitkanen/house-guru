import mongoose from "mongoose"; 

mongoose.set('runValidators', true);

const postSchema = new mongoose.Schema({
    title: {type: String},
    subtitle: {type: String},
    image: {type: String, default:"/products/dummy.jpg"}
},{
    strict: true
})

export default mongoose.models.post || mongoose.model('post', postSchema);
