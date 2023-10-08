const { InsertInProjectTableQuery} = require("../database/model/insertTable");
  const { select } = require("../service/select");
  const { insert } = require("../service/insert");
  const { deleteRow } = require("../service/delete");
  const { deleteFromTable } = require("../database/model/deleteTable");
  
  exports.addProject = async (req, res) => {
    console.log("\n[+]  request", req.method, req.originalUrl);
    console.log("[+] ", req.body);
   
    try {    insert(
                InsertInProjectTableQuery(),
                "project",
                [
                    req.body.id,
                    req.body.title,
                    req.body.description,
                    req.body.required_skills, 
                    req.body.budget,
                    req.body.deadline,   
                    req.body.company_id,
                    req.body.freelancer_ids,
                    req.body.status,         
                ],
                (err) => {
                    if (!err) {
                        console.log(`[+]  `, {
                            statusMessage: "Project added succeed",
                            status: true,
                        });
                        res.send({
                            statusMessage: "Project added succeed",
                            status: true,
                        });
                        } 
                    }
                );
            } catch (err) {
                console.log(`[-]  `, {
                error: err,
          statusMessage: "something went wrong in function",
          status: false,
        });
        res.send({
          error: err,
          statusMessage: "something went wrong",
          status: false,
        });
      }
    
  };
  