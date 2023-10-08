const { update } = require("../service/update");

exports.UpdateStudent = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "students",
    setfield: [],
    condition: [`id='${req.body.id}'`],
  };

  //    if(req.body.Password ){

  if (req.body.Name != undefined) {
    updateQuery.setfield.push(`Name='${req.body.Name}'`);
  }
  if (req.body.quantity != undefined) {
    updateQuery.setfield.push(`quantity='${req.body.quantity}'`);
  }
  if (req.body.dis != undefined) {
    updateQuery.setfield.push(`dis='${req.body.dis}'`);
  }
  if (req.body.rating != undefined) {
    updateQuery.setfield.push(`rating='${req.body.rating}'`);
  }
  if (req.body.Price != undefined) {
    updateQuery.setfield.push(`Price='${req.body.Price}'`);
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
        statusMessage: "students successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "students successfully updated",
        status: true,
      });
    }
  });
};
