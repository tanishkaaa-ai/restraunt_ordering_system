const MenuItem = require("../models/menuitem-model");

// ADD MENU ITEM (Admin Only)
exports.addMenuItem = async (req, res) => {
    try {
        const { name, category, price, description, image } = req.body;

        const newItem = await MenuItem.create({
            name,
            category,
            price,
            description,
            image
        });

        res.status(201).json({
            message: "Menu item added successfully",
            item: newItem
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// GET ALL MENU ITEMS (Everyone)
exports.getMenuItems = async (req, res) => {
    try {
        const items = await MenuItem.find();
        res.json(items);

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// UPDATE MENU ITEM (Admin Only)
exports.updateMenuItem = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedItem = await MenuItem.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.json({
            message: "Menu item updated",
            item: updatedItem
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// DELETE MENU ITEM (Admin Only)
exports.deleteMenuItem = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedItem = await MenuItem.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.json({ message: "Menu item deleted" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
