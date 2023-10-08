const { update } = require("../service/update");

exports.updateCompany = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "company",
    setfield: [],
    condition: [`id='${req.body.id}'`],
  };

  if (req.body.email != undefined) {
    updateQuery.setfield.push(`email='${req.body.email}'`);
  }
  if (req.body.cin != undefined) {
    updateQuery.setfield.push(`cin='${req.body.cin}'`);
  }
  if (req.body.status != undefined) {
    updateQuery.setfield.push(`status='${req.body.status}'`);
  }

  if (req.body.name != undefined) {
    updateQuery.setfield.push(`name='${req.body.name}'`);
  }

  if (req.body.address != undefined) {
    updateQuery.setfield.push(`address='${req.body.address}'`);
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
        statusMessage: "company successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "company successfully updated",
        status: true,
      });
    }
  });
};
