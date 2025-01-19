import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
const app = express();
import userRoutes from './routes/routes.js'
import adminRoutes from './routes/adminRoutes.js';
import {connect} from './DB/database.js'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedorigin=[
    "http://localhost:3000"
]
connect();
app.use(cors({
    origin:allowedorigin,
    methods:['GET','POST']
}));
app.use(bodyParser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/admin',adminRoutes);
app.use('/',userRoutes);
app.use('/',(req,res)=>{
    res.send('hii');
})
app.listen(5001, () => console.log('Server running on http://localhost:5001'));