const { addUsers } = require("../controllers/addUser");
const { fetchallAllUsers } = require("../controllers/fetchAllUsers");
const { updateUsers } = require("../controllers/updateUsers");

const router = require("express").Router();

router.post("/add",addUsers);
router.post("/fetchall",fetchallAllUsers);
router.post("/update",updateUsers);



module.exports = router;
