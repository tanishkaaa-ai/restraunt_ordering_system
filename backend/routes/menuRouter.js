const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth-middleware");
const allowRoles = require("../middlewares/role-middleware");

const {
    addMenuItem,
    getMenuItems,
    updateMenuItem,
    deleteMenuItem
} = require("../controllers/menu-controller");

// PUBLIC (Customer + Admin)
router.get("/", getMenuItems);

// ADMIN ONLY ROUTES
router.post("/add", auth, allowRoles(["admin"]), addMenuItem);
router.put("/:id", auth, allowRoles(["admin"]), updateMenuItem);
router.delete("/:id", auth, allowRoles(["admin"]), deleteMenuItem);

module.exports = router;
