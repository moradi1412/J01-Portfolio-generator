const inquirer = require('inquirer');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: 'name',
      message: 'what is your name?'
    },
    {
      type: "input",
      name: 'github',
      message: 'Enter your Github Username?'
    },
    {
      type: "input",
      name: 'about',
      message: 'Provide some information about yousrself?: '
    },
  ]);
};

const promptProject = portfolioData => {
  
  console.log(`
  =================
  Add a New Project
  =================
  `); 

  // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}
  return inquirer.prompt([
    {
      type: 'input', 
      name: 'name',
      message:'what is the name of your project? '
    }, 
    {
      type: 'input', 
      name: 'description',
      message:'provide a description of the project (Required) ? '
    }, 
    {
      type: 'checkbox', 
      name: 'languages',
      message: 'Waht did you build this project with? (check all that apply)',
      choices:['JavaScript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bottstrap', 'node']
    }, 
    {
      type: 'input', 
      name: 'link',
      message:'Enter the gitHub link to your projects. (Required) '
    }, 
    {
      type: 'confirm', 
      name: 'feature',
      message:'would you like to feature this project? ',
      default: false
    }, 
    {
      type: 'confirm', 
      name: 'confrimAddProject',
      message:'Would you like to enter another project? ',
      default: false
    }, 
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
};
  })
};


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

// console.log (inquirer);


// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// //capture the command line arguements 
// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;



// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
// const profileDataArgs = process.argv.slice(2, process.argv.length);


// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };

//   printProfileData(profileDataArgs);