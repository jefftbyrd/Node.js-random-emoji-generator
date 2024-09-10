import { argv } from 'node:process';
import * as emoji from 'node-emoji';

const randomEmoji = emoji.random();
const userInput = argv[2];

if (argv.length < 3) {
  // This happens if there is no user input
  console.log(randomEmoji.emoji);
} else if (emoji.get(userInput)) {
  // This happens if the emoji exists
  console.log(emoji.get(userInput));
} else {
  // This happens if the userInput is undefined
  console.log(`Sorry, ${userInput} emoji does not exist.`);
}
