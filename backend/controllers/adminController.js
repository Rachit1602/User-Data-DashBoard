import {User} from '../model/userData.js';
import {Admin} from '../model/admin.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userDataViewController=async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const register=async (req, res) => {
    try {
        const { username,email,password } = req.body;
        const user=await User.find({username});
        if(!user){
            return register.status(404).json({message:'User already registered'})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({ username,email,password: hashedPassword });
        await admin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const login=async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(404).json({ message: 'Admin not found' });

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) return res.status(403).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        //console.log(token);
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}