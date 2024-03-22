const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager.cjs');
const { isRequired } = require('../validation/validation.cjs');

async function set() {
  const answers = await inquirer.prompt({
    name: 'key',
    type: 'input',
    message: 'Enter API KEY',
    default() {
      return '00000';
    },
  });
  const keyManager = new KeyManager();
  const key = keyManager.setKey(answers.key);
  if (key) {
            console.log('API Key is SET'.blue);
        }

}

async function show(){
    try{
        const keyManager = new KeyManager();
        const key = await keyManager.getKey();
        console.log("Current Api key" , key.yellow);
        return key;
    }
    catch(error){
        console.log('Hello from remove');
    }

}

async function remove(){
    try{
        const keyManager = new KeyManager();
        await keyManager.deleteKey();
        console.log('Key Removed');
        return ;

    }
    catch(err){
        console.error(err.message.red);

    }

}
module.exports = { set, show , remove} ;

