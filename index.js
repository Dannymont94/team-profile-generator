const generateHTML = require('./src/generate-html');
const { writeFile, copyFile } = require('./utils/write-and-copy-file');
const { promptManager, promptTeam } = require('./utils/prompt-user');


mockData = {
  manager: {
    name: 'Dan',
    id: 'D123',
    email: 'dan@dan.com',
    officeNumber: 'f24'
  },
  engineers: [
    {
      role: 'Engineer',
      name: 'Nes',
      id: 'N123',
      email: 'nes@nes.com',
      github: 'neshub',
      confirmAddTeamMember: true
    },
    {
      role: 'Engineer',
      name: 'Bec',
      id: 'B123',
      email: 'bec@bec.com',
      github: 'bechub',
      confirmAddTeamMember: true
    }
  ],
  interns: [
    {
      role: 'Intern',
      name: 'Bub',
      id: 'B123',
      email: 'bub@bub.com',
      school: 'UB',
      confirmAddTeamMember: false
    },
    {
      role: 'Intern',
      name: 'Man',
      id: 'M123',
      email: 'man@man.com',
      school: 'UM',
      confirmAddTeamMember: false
    }
  ]
};

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