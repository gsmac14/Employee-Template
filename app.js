//import modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//returns HTML
const render = require("./lib/htmlRenderer");

//empty array that will recieve new employees once pushed
const employees = [];

//function to run inquirer in order to generate questions in the terminal
const askQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team member?",
      },

      {
        type: "input",
        name: "id",
        message: "What is the id of the team member?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },

      {
        type: "list",
        name: "role",
        message: "Choose a role.",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        name: "github",
        message: "Engineer please enter your github username.",
        when: (response) => response.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Intern plese enter your school.",
        when: (response) => response.role === "Intern",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Manager, please enter office number.",
        when: (response) => response.role === "Manager",
      },
      {
        type: "list",
        name: "continue",
        message: "Do you want to continue with more team members?",
        choices: ["Yes", "No"],
      },
    ])

    //code to push new team members to empty array on line 14
    .then((answers) => {
      //   console.log(answers);
      if (answers.role === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        employees.push(engineer);
      } else if (answers.role === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
      } else {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        employees.push(manager);
      }

      //If statement that renders HTML for team. If user chooses yes it will loop back through questions.
      //Else will render HTML with new employees
      if (answers.continue === "Yes") {
        askQuestions();
      } else {
        const html = render(employees);
        // console.log(html)
        writeFileAsync(outputPath, html).then(() => {
          // console.log("written");
        });
      }
    });
};

askQuestions();

