const { createTable } = require("../service/createTable");
const { showTables } = require("../service/showTables");

const { insert } = require("../service/insert");

const {
 
  UsersTableCreateQuery,
  FreelancerTableCreateQuery,
  CompanyTableCreateQuery,
  ProjectTableCreateQuery
 
} = require("../database/model/createTable");


exports.createInitialTable = async () => {
  console.log("[+] initialling initial table check ");
  let presentTable = [];
  await showTables(async (result) => {
    presentTable.push(...result);
    presentTable.map((table, index) => {
      presentTable[index] = table[`Tables_in_${process.env.DB_NAME}`];
    });

   
    if (presentTable.includes("users") != true) {
      createTable(UsersTableCreateQuery(), (result) => {
        console.log("[+] Users Table Created");
      });
    }

    if (presentTable.includes("freelancer") != true) {
      createTable(FreelancerTableCreateQuery(), (result) => {
        console.log("[+] Freelancer Table Created");
      });
    }

    if (presentTable.includes("project") != true) {
      createTable(ProjectTableCreateQuery(), (result) => {
        console.log("[+] Project Table Created");
      });
    }

    if (presentTable.includes("company") != true) {
      createTable(CompanyTableCreateQuery(), (result) => {
        console.log("[+] Company Table Created");
      });
    }
    
  });
  //refreshValues();
};
