import { User } from "../model/userData.js";
export const userDataController= async(req, res)=>{
    try {
        const { name, socialHandle } = req.body;
        const images = req.files.map(file => file.path);
        const newUser = new User({ name, socialHandle, images });
        console.log(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(500).send(err);
    }
}