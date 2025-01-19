import mongoose from 'mongoose';
export const connect=async(req,res)=>{
    await mongoose.connect(process.env.mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected");
}
//'mongodb://localhost:27017/userData'