const fs = require('fs');

function writeFile(pageHTML) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve('Team profile HTML file created in dist folder!');
    })
  })
}

module.exports = writeFile;