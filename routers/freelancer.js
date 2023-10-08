const { addFreelancer } = require("../controllers/addFreelancer");
const { fetchallAllFreelancer } = require("../controllers/fetchAllFreelancer");
const { updateFreelancer} = require("../controllers/updateFreelancer");

const router = require("express").Router();

router.post("/add",addFreelancer);
router.post("/fetchall",fetchallAllFreelancer);
router.post("/update",updateFreelancer);

module.exports = router;
