const Cart = require("../models/cart-model");
const MenuItem = require("../models/menuitem-model");

// GET CART
exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      cart = await Cart.create({ userId: req.user.id, items: [] });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ADD TO CART
exports.addToCart = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;

    const item = await MenuItem.findById(itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = await Cart.create({
        userId: req.user.id,
        items: []
      });
    }

    const itemIndex = cart.items.findIndex((i) => i.itemId.toString() === itemId);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({
        itemId: item._id,
        name: item.name,
        price: item.price,
        quantity: quantity
      });
    }

    await cart.save();
    res.json({ message: "Added to cart", cart });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE QUANTITY
exports.updateQuantity = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;

    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex((i) => i.itemId.toString() === itemId);

    if (itemIndex === -1)
      return res.status(404).json({ message: "Item not in cart" });

    cart.items[itemIndex].quantity = quantity;
    await cart.save();

    res.json({ message: "Quantity updated", cart });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// REMOVE ITEM
exports.removeItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (i) => i.itemId.toString() !== itemId
    );

    await cart.save();
    res.json({ message: "Item removed", cart });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// CLEAR CART
exports.clearCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = [];
    await cart.save();

    res.json({ message: "Cart cleared" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
