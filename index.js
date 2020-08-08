const generateHTML = require('./src/generate-html');
const { writeFile, copyFile } = require('./utils/write-and-copy-file');
const { promptManager, promptTeam } = require('./utils/prompt-user');

promptManager()
  .then(teamData => promptTeam(teamData))
  .then(teamData => generateHTML(teamData))
  .then(pageHTML => writeFile(pageHTML))
  .then(writeResponse => {
    console.log(writeResponse);
    return copyFile();
  })
  .then(copyResponse => console.log(copyResponse))
  .catch(err => console.log(err));