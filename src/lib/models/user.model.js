import mongoose from "mongoose"; 

mongoose.set('runValidators', true);

const userSchema = new mongoose.Schema({

    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required:true},
},{
    strict: true
})

export default mongoose.models.user || mongoose.model('user', userSchema);
