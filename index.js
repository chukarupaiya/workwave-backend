const express = require("express");
const { createInitialTable } = require("./controllers/createInitialTable");
const app = express();
const { db } = require("./database/config");

const usersRouter = require("./routers/users");
const projectRouter = require("./routers/project");
const companyRouter = require("./routers/company");
const freelancerRouter = require("./routers/freelancer");


app.use(express.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  next();
});



app.listen(3001, () => {
  db.connect(function (err) {
    if (err) {
      return console.error("[-] error: " + err.message);
    }
    console.log("[+] Connected to the MySQL server.");
    createInitialTable();
    
    app.use("/users", usersRouter);
    app.use("/company", companyRouter);
    app.use("/project", projectRouter);
    app.use("/freelancer", freelancerRouter);

    
  });
  console.log("[+] Server listening");
});
