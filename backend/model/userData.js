import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: String,
    socialHandle: String,
    images: [String],
});

export const User = mongoose.model('User', UserSchema);