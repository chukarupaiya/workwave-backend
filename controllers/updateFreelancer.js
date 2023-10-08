const { update } = require("../service/update");

exports.updateFreelancer = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "freelancer",
    setfield: [],
    condition: [`id='${req.body.id}'`],
  };

  if (req.body.email != undefined) {
    updateQuery.setfield.push(`email='${req.body.email}'`);
  }
  if (req.body.aadhar != undefined) {
    updateQuery.setfield.push(`aadhar='${req.body.aadhar}'`);
  }
  if (req.body.phone != undefined) {
    updateQuery.setfield.push(`phone='${req.body.phone}'`);
  }

  if (req.body.name != undefined) {
    updateQuery.setfield.push(`name='${req.body.name}'`);
  }

  if (req.body.github != undefined) {
    updateQuery.setfield.push(`github='${req.body.github}'`);
  }

  if (req.body.linkedin != undefined) {
    updateQuery.setfield.push(`linkedin='${req.body.linkedin}'`);
  }

  if (req.body.skills != undefined) {
    updateQuery.setfield.push(`skills='${req.body.skills}'`);
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
        statusMessage: "freelancer successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "freelancer successfully updated",
        status: true,
      });
    }
  });
};
