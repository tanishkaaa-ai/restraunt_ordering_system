const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");  // token comes as "Bearer abcdef"

    if (!token) {
        return res.status(401).json({ message: "Access Denied: No Token" });
    }

    try {
        const decoded = jwt.verify(
            token.replace("Bearer ", ""), 
            process.env.JWT_SECRET
        );

        req.user = decoded; // contains { id, role }
        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
};
