const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth-middleware");
const allowRoles = require("../middlewares/role-middleware");

const {
    getAllUsers,
    getAllOrders,
    getAdminStats,
    getChefOrders,
    getDeliveryOrders,
    getCustomerOrders
} = require("../controllers/dashboard-controller");

// ADMIN routes
router.get("/admin/users", auth, allowRoles(["admin"]), getAllUsers);
router.get("/admin/orders", auth, allowRoles(["admin"]), getAllOrders);
router.get("/admin/stats", auth, allowRoles(["admin"]), getAdminStats);

// CHEF routes
router.get("/chef/orders", auth, allowRoles(["chef", "admin"]), getChefOrders);

// DELIVERY routes
router.get("/delivery/orders", auth, allowRoles(["delivery", "admin"]), getDeliveryOrders);

// CUSTOMER routes
router.get("/customer/orders", auth, allowRoles(["customer"]), getCustomerOrders);

module.exports = router;
