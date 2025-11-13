const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MenuItem",
                required: true
            },
            name: String,       // snapshot (so menu changes don't affect old orders)
            price: Number,
            quantity: Number
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: [
            "Received",
            "Preparing",
            "Ready",
            "Out for Delivery",
            "Delivered",
            "Cancelled"
        ],
        default: "Received"
    },

    chefId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    deliveryAgentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    orderDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", OrderSchema);
