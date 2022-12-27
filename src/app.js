import readline from 'readline'
import { data } from './controller/csv.controller.js';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter File Name ?', async (name) =>{
  
try {
  console.log(`${name}`);
  await data(name)
} catch (error) {
  console.log(error)
}
})
rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});