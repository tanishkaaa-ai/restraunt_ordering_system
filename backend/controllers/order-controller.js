const Order = require("../models/order-model");
const MenuItem = require("../models/menuitem-model");

// CREATE ORDER (Customer)
exports.createOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: "No items in order" });
        }

        // Fetch item prices & calculate total
        let totalAmount = 0;
        let processedItems = [];

        for (let item of items) {
            const menuItem = await MenuItem.findById(item.itemId);
            if (!menuItem) continue;

            processedItems.push({
                itemId: menuItem._id,
                name: menuItem.name,
                price: menuItem.price,
                quantity: item.quantity
            });

            totalAmount += menuItem.price * item.quantity;
        }

        const order = await Order.create({
            userId,
            items: processedItems,
            totalAmount,
            status: "Received"
        });

        res.status(201).json({
            message: "Order created successfully",
            order
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


// GET MY ORDERS (Customer)
exports.getMyOrders = async (req, res) => {
    try {
        const userId = req.user.id;

        const orders = await Order.find({ userId });

        res.json(orders);

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


// GET ALL ORDERS (Admin)
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("userId", "name email");

        res.json(orders);

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


// UPDATE ORDER STATUS (Chef, Delivery, Admin)
exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const allowedStatuses = [
            "Received",
            "Preparing",
            "Ready",
            "Out for Delivery",
            "Delivered",
            "Cancelled"
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        const order = await Order.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json({
            message: "Order status updated",
            order
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
