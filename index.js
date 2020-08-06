const generateHTML = require('./src/generate-html');
const writeFile = require('./utils/write-file');
const { promptManager, promptTeam } = require('./utils/prompt-user');

// promptManager()
//   .then(teamData => promptTeam(teamData))
//   .then(teamData => generateHTML(teamData))
//   .then(pageHTML => writeFile(pageHTML))
//   .then(console.log('Team Profile page generated in dist folder!'))
//   .catch(err => console.log(err));

promptManager()
  .then(teamData => promptTeam(teamData))
  .then(teamData => generateHTML(teamData))
  .catch(err => console.log(err));