const Order = require("../models/order-model");
const User = require("../models/user-model");
const MenuItem = require("../models/menuitem-model");

// ADMIN - GET ALL USERS
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// ADMIN - GET ALL ORDERS
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("userId");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// ADMIN - GET STATS
// ADMIN - GET STATS
exports.getAdminStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalOrders = await Order.countDocuments();
        const totalMenu = await MenuItem.countDocuments();

        // Count by roles
        const totalCustomers = await User.countDocuments({ role: "customer" });
        const totalChefs = await User.countDocuments({ role: "chef" });
        const totalDelivery = await User.countDocuments({ role: "delivery" });

        res.json({
            totalUsers,
            totalOrders,
            totalMenu,
            totalCustomers,
            totalChefs,
            totalDelivery
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", error });
    }
};


// CHEF - ORDERS TO COOK
exports.getChefOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            status: { $in: ["Received", "Preparing"] }
        }).populate("userId");

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// DELIVERY AGENT - ORDERS TO DELIVER
exports.getDeliveryOrders = async (req, res) => {
    try {
        const userId = req.user.id;   // delivery agent ID

        const orders = await Order.find({
            deliveryAgentId: userId   // only see assigned orders
        }).populate("userId");

        res.json(orders);

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


// CUSTOMER - GET THEIR OWN ORDERS
exports.getCustomerOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};