# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Team Profile Generator is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. The profile will display your team members' names, emails, and IDs. Managers' office numbers, engineers' GitHub usernames, and interns' schools will also be displayed. The generated HTML file and a corresponding stylesheet will be generated in the dist folder after all prompts have been answered.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install dependencies, run the following command:
```
npm install
```

## Usage
To use this application, run the following command:
```
node index
```
Then, answer the prompts that appear in the command line. Select the employees you'd like to add to your team until all of your team's information has been inputted. After answering all the questions, an HTML file will be generated in the output folder along with a corresponding CSS file.

Here is a short [demo video](https://drive.google.com/file/d/15xR9m07KuxQ2qibQO3HxU86oSEE3YhXP/view) to help you use the Team Profile Generator.

## Sample Generated Readme
Here is a [sample generated HTML file](https://github.com/Dannymont94/team-profile-generator/blob/master/src/test.html).

## Credits
Created by Daniel Monterrosa.

Powered by [Inquirer](https://www.npmjs.com/package/inquirer#documentation).
All testing done with [Jest](https://jestjs.io/docs/en/getting-started).

## License
Team Profile Generator is licensed under the MIT License.

## Tests
To run tests, run the following command:
```
npm test
```

## Questions
Please reach out to me with any questions by connecting with me on [GitHub](https://github.com/Dannymont94) or sending an email to dannym94@gmail.com.