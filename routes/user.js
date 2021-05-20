const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  removeUser,
  createUser
} = require("../controllers/user");

router.param("userId", getUserById);

router.get("/user/:userId", getUser);
router.post("/user",createUser)
router.put("/user/:userId", updateUser);

router.delete("/user/:userId", removeUser);



module.exports = router;
