const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth-middleware");
const allowRoles = require("../middlewares/role-middleware");

const {
    createOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus
} = require("../controllers/order-controller");

// CUSTOMER: Create order
router.post("/create", auth, allowRoles(["customer"]), createOrder);

// CUSTOMER: Get my orders
router.get("/myorders", auth, allowRoles(["customer"]), getMyOrders);

// ADMIN: Get all orders
router.get("/all", auth, allowRoles(["admin"]), getAllOrders);

// CHEF / DELIVERY / ADMIN: Update order status
router.put("/update-status/:id",
    auth,
    allowRoles(["chef", "delivery", "admin"]),
    updateOrderStatus
);

module.exports = router;
