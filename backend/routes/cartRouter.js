const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth-middleware");

const {
  getCart,
  addToCart,
  updateQuantity,
  removeItem,
  clearCart
} = require("../controllers/cart-controller");

// AUTH REQUIRED ROUTES
router.get("/", auth, getCart);
router.post("/add", auth, addToCart);
router.put("/update", auth, updateQuantity);
router.delete("/remove/:itemId", auth, removeItem);
router.delete("/clear", auth, clearCart);

module.exports = router;
