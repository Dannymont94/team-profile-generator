function generateEngineerHTML() {

}

function generateInternHTML() {

}

function generateHTML(teamData) {
  console.log(teamData);
  const { manager, engineers, interns } = teamData;
  console.log(manager);
  console.log(engineers);
  console.log(interns);
}

module.exports = generateHTML;