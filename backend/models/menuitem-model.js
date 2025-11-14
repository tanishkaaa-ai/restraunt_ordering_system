const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },  // Starter, Main, etc.
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
