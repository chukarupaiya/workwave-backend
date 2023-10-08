

const UsersTableCreateQuery = () => {
  string =
    "CREATE TABLE `users` (`id` INT NOT NULL AUTO_INCREMENT ,`email` varchar(255) NOT NULL,`password` varchar(255) NOT NULL ,`type` varchar(255) NOT NULL,PRIMARY KEY (`id`));";
  return string;
};

const FreelancerTableCreateQuery = () => {
  string =
    "CREATE TABLE `freelancer` (`id` INT NOT NULL AUTO_INCREMENT ,`email` varchar(255) NOT NULL,`aadhar` varchar(255) NOT NULL ,`phone` varchar(255) NOT NULL ,`name` varchar(255) NOT NULL ,`github` varchar(255) NOT NULL ,`linkedin` varchar(255) NOT NULL ,`skills` varchar(255) NOT NULL ,PRIMARY KEY (`id`));";
  return string;
};

const CompanyTableCreateQuery = () => {
  string =
    "CREATE TABLE `company` (`id` INT NOT NULL AUTO_INCREMENT ,`email` varchar(255) NOT NULL,`cin` varchar(255) NOT NULL ,`status` varchar(255) NOT NULL ,`name` varchar(255) NOT NULL ,`address` varchar(255) NOT NULL ,PRIMARY KEY (`id`));";
  return string;
};

const ProjectTableCreateQuery = () => {
  string =
    "CREATE TABLE `project` (`id` INT NOT NULL AUTO_INCREMENT ,`title` varchar(255) NOT NULL,`description` varchar(255) NOT NULL,`required_skills` varchar(255) NOT NULL,`budget` varchar(255) NOT NULL ,`deadline` varchar(255) NOT NULL ,`company_id` varchar(255) NOT NULL ,`freelancer_ids` varchar(255) NOT NULL ,`status` varchar(255) NOT NULL,PRIMARY KEY (`id`));";
  return string;
};

module.exports = {
  
  UsersTableCreateQuery,
  FreelancerTableCreateQuery,
  CompanyTableCreateQuery,
  ProjectTableCreateQuery
 
};
