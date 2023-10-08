const { addProject } = require("../controllers/addProject");
const { fetchallAllProject } = require("../controllers/fetchAllProject");
const { updateProject } = require("../controllers/updateProject");

const router = require("express").Router();

router.post("/add",addProject);
router.post("/fetchall",fetchallAllProject);
router.post("/update",updateProject);

module.exports = router;
