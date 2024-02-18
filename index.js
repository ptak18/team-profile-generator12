const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const mainQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Please type in the manager's name",
  },
  {
    type: "input",
    name: "managerId",
    message: "Please type in the manager's id",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Please type in the manager's email",
  },
  {
    type: "input",
    name: "managerOfficeNo",
    message: "Please type in the manager's office no",
  },
];

const addNewEmployee = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addNewEmployee",
        message: "Do you want to add another employee?",
      },
    ])
    .then((addNewEmployeeAnswers) => {
      if (addNewEmployeeAnswers.addNewEmployee) {
        // prompt the user to add choose which type of employee
        // ask the questions for that specific type of employee
        inquirer
          .prompt([
            {
              type: "list",
              name: "employeeType",
              message: "What type of employee would you like to add",
              choices: [
                { name: "Engineer", value: "engineer" },
                { name: "Intern", value: "intern" },
              ],
            },
          ])
          .then((employeeTypeAnswers) => {
            console.log(employeeTypeAnswers);
          });
      } else {
        // generate file
      }
    });
};

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const init = () => {
  inquirer.prompt(mainQuestions).then((managerAnswers) => {
    addNewEmployee();
  });
};

init();
