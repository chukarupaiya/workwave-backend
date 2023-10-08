
const InsertInUsersTableQuery = () => {
  let string =
    "INSERT INTO `users` (`id`, `email`, `password`,`type`) VALUES (?, ?, ? , ?);";
  return string;
};

const InsertInFreelancerTableQuery = () => {
  let string =
    "INSERT INTO `freelancer` (`id`, `email`, `aadhar`,`phone`,`name`,`github`,`linkedin`,`skills`) VALUES (?, ?, ? , ? , ? , ? , ? , ?);";
  return string;
};

const InsertInCompanyTableQuery = () => {
  let string =
    "INSERT INTO `company` (`id`, `email`, `cin`,`status`,`name`,`address`) VALUES (?, ?, ? , ? , ? , ?);";
  return string;
};

const InsertInProjectTableQuery = () => {
  let string =
    "INSERT INTO `project` (`id`, `title`, `description`,`required_skills`,`budget`,`deadline`,`company_id`,`freelancer_ids`,`status`) VALUES (?, ?, ? , ? , ? , ? , ? , ? ,?);";
  return string;
};


module.exports = {
 
  InsertInUsersTableQuery,
  InsertInCompanyTableQuery,
  InsertInFreelancerTableQuery,
  InsertInProjectTableQuery
 
};
