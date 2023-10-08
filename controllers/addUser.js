const { InsertInUsersTableQuery} = require("../database/model/insertTable");
  const { select } = require("../service/select");
  const { insert } = require("../service/insert");
  const { deleteRow } = require("../service/delete");
  const { deleteFromTable } = require("../database/model/deleteTable");
  
  exports.addUsers = async (req, res) => {
    console.log("\n[+]  request", req.method, req.originalUrl);
    console.log("[+] ", req.body);
   
    try {    insert(
                InsertInUsersTableQuery(),
                "users",
                [
                    req.body.id,
                    req.body.email,
                    req.body.password,
                    req.body.type 
                ],
                (err) => {
                    if (!err) {
                        console.log(`[+]  `, {
                            statusMessage: "User Registration succeed",
                            status: true,
                        });
                        res.send({
                            statusMessage: "User Registration succeed",
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
  