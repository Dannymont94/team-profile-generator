const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateManagerHTML({ name, id, email, officeNumber }) {
  const manager = new Manager(name, id, email, officeNumber);
  console.log(manager);
}

function generateEngineerHTML(engineers) {
  engineers.forEach(({ name, id, email, github}) => {
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);
  });
}

function generateInternHTML(interns) {
  interns.forEach(({ name, id, email, school}) => {
    const intern = new Intern(name, id, email, school);
    console.log(intern);
  });}

function generateHTML({ manager, engineers, interns }) {
  generateManagerHTML(manager);
  generateEngineerHTML(engineers);
  generateInternHTML(interns);
}

module.exports = generateHTML;