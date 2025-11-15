import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongoose-connect.js";
import authRoutes from "./routes/authRouter.js";
import auth from "./middlewares/auth-middleware.js";
import menuRoutes from "./routes/menuRouter.js";
import orderRoutes from "./routes/orderRouter.js";
import dashboardRoutes from "./routes/dashboardRouter.js";
import cartRoutes from "./routes/cartRouter.js";
dotenv.config();
const app = express();

app.use(cors());
//middlewares 
app.use(express.json());

// mongodb connection 
connectDB();

// app.get("/", (req, res) => {
//   res.send("Restaurant Ordering System API is running 🚀");
// });
app.use("/auth", authRoutes);


// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




app.get("/protected-test", auth, (req, res) => {
    res.json({ message: "Protected route working", user: req.user });
});


app.use("/menu", menuRoutes);
app.use("/cart",cartRoutes)

app.use("/order", orderRoutes);

app.use("/dashboard", dashboardRoutes);


// const express = require("express");
// const connectDB = require("./config/mongoose-connect");
// const authRoutes = require("./routes/authRouter");
// require("dotenv").config();

// const app = express();
// app.use(express.json());

// // connect database
// connectDB();


// // use auth routes
// app.use("/auth", authRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));
