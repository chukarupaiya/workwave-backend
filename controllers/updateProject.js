const { update } = require("../service/update");

exports.updateProject = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "project",
    setfield: [],
    condition: [`id='${req.body.id}'`],
  };

  if (req.body.title != undefined) {
    updateQuery.setfield.push(`title='${req.body.title}'`);
  }
  if (req.body.description != undefined) {
    updateQuery.setfield.push(`description='${req.body.description}'`);
  }
  if (req.body.required_skills != undefined) {
    updateQuery.setfield.push(`required_skills='${req.body.required_skills}'`);
  }

  if (req.body.budget != undefined) {
    updateQuery.setfield.push(`budget='${req.body.budget}'`);
  }

  if (req.body.deadline != undefined) {
    updateQuery.setfield.push(`deadline='${req.body.deadline}'`);
  }

  if (req.body.company_id != undefined) {
    updateQuery.setfield.push(`company_id='${req.body.company_id}'`);
  }

  if (req.body.freelancer_ids != undefined) {
    updateQuery.setfield.push(`freelancer_ids='${req.body.freelancer_ids}'`);
  }

  if (req.body.status != undefined) {
    updateQuery.setfield.push(`status='${req.body.status}'`);
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
        statusMessage: "project successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "project successfully updated",
        status: true,
      });
    }
  });
};
