const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//nesting questions within to prompt question after another. 
rl.question('What is your Name? Nicknames are also acceptable 😊.   ', (answer) => {
  rl.question('What\'s an activity you like doing?   ', (answer2) => {
    rl.question('What do you listen to while doing that?   ', (answer3) => {
      
      console.log(answer, answer2, answer3);
      
      rl.close();
    })
  });
});
