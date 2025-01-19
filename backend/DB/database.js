import mongoose from 'mongoose';
export const connect=async(req,res)=>{
    await mongoose.connect('mongodb://localhost:27017/userData', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected");
}
