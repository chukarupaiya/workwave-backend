const { update } = require("../service/update");

exports.updateUsers = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "users",
    setfield: [],
    condition: [`id='${req.body.id}'`],
  };

  if (req.body.email != undefined) {
    updateQuery.setfield.push(`email='${req.body.email}'`);
  }
  if (req.body.password != undefined) {
    updateQuery.setfield.push(`password='${req.body.password}'`);
  }
  if (req.body.type != undefined) {
    updateQuery.setfield.push(`type='${req.body.type}'`);
  }
  
  
  await update(updateQuery, async (err, result) => {
    if (err) {
      console.log(`[-]  `, {
        error: err,
        statusMessage: "something went wrong",
        status: false,
      });
      res.send({
        error: err,
        statusMessage: "something went wrong",
        status: false,
      });
    } else {
      console.log(`[+]  `, {
        statusMessage: "user successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "user successfully updated",
        status: true,
      });
    }
  });
};
