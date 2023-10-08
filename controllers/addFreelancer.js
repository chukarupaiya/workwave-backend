const { InsertInFreelancerTableQuery} = require("../database/model/insertTable");
  const { select } = require("../service/select");
  const { insert } = require("../service/insert");
  const { deleteRow } = require("../service/delete");
  const { deleteFromTable } = require("../database/model/deleteTable");
  
  exports.addFreelancer = async (req, res) => {
    console.log("\n[+]  request", req.method, req.originalUrl);
    console.log("[+] ", req.body);
   
    try {    insert(
                InsertInFreelancerTableQuery(),
                "freelancer",
                [
                    req.body.id,
                    req.body.email,
                    req.body.aadhar,
                    req.body.phone, 
                    req.body.name,
                    req.body.github,
                    req.body.linkedin,
                    req.body.skills      
                ],
                (err) => {
                    if (!err) {
                        console.log(`[+]  `, {
                            statusMessage: "Freelancer added succeed",
                            status: true,
                        });
                        res.send({
                            statusMessage: "Freelancer added succeed",
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
  