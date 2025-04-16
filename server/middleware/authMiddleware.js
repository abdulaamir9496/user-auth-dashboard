const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    console.log("Auth header:", req.headers.authorization);
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
        console.log("No auth header or incorrect format");
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const token = auth.split(" ")[1];
        console.log("Token extracted:", token);
        console.log("Using secret:", process.env.JWT_SECRET);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);
        req.user = decoded;
        next();
    } catch (err) {
        console.log("Token verification error:", err.message);
        res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = protect;