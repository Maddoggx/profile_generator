const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable. ', (name) => {   
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What genre of music do you listen to while doing that? ', (music) => {     
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (faveFood) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (goodEats) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (sPower) => {
            
            console.log(`${name} likes to listens to the ${music} genre while they do ${activity}. ${name} favourite meal is ${faveFood} and they like to eat ${goodEats}. Their favourite sport is ${sport} and their superpower is ${sPower}.`);
            
            rl.close();
            });
          }); 
        }); 
      }); 
    });
  });
});