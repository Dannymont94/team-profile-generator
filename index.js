const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site');
const { promptManager, promptTeam } = require('./utils/prompt-user');

promptManager()
  .then(promptTeam)
  .then(teamData => generatePage(teamData))
  .then(pageHTML => writeFile(pageHTML))
  .then(console.log('Team Profile generated in dist folder!'))
  .catch(err => console.log(err));