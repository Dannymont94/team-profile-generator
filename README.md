# team-profile-generator

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

__tests__/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/                // classes
src/                // template helper code
index.js            // runs the application

The first class is an Employee parent class with the following properties and methods:
- name
- id
- email
- getName()
- getId()
- getEmail()
- getRole() // Returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have:

- officeNumber
- getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:
- github // GitHub username
- getGithub()
- getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:
- school
- getSchool()
- getRole() // Overridden to return 'Intern'

Workflow:
Install Jest and Inquirer 	✓
Create directory structure 	✓
Create failing Employee tests ✓
Create Employee class constructor that passes tests ✓
Create failing Manager tests
Create Manager class constructor that passes tests
Create failing Engineer tests
Create Engineer class constructor that passes tests
Create failing Intern tests
Create Intern class constructor that passes tests
Write Inquirer prompts for name, id, email, and role
If Manager, inquirer prompts for office number
If Engineer, inquirer prompts for GitHub username
If Intern, inquirer prompts for school name
Create HTML template engine
WriteFile to dist folder
Create CSS stylesheet
Record demo video