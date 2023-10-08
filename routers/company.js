const { fetchallAllCompany} = require("../controllers/fetchAllCompany");
const { addCompany } = require("../controllers/addCompany");
const { updateCompany } = require("../controllers/updateCompany");

const router = require("express").Router();

router.post("/add",addCompany);
router.post("/fetchall",fetchallAllCompany);
router.post("/update",updateCompany);

module.exports = router;
