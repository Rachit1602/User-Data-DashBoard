import jwt from "jsonwebtoken";
export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    //console.log(token)
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' });
        req.user = user;
        next();
    });
};