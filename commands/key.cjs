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
module.exports = set ;

