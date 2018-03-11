#!/usr/bin/env node

/**
 * Define constants and import librairies 
 */
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

const argv = process.argv.slice(2);

/**
 * display the result of the command 
 */
helpers(argv);

/**
 * parameters saved as default
 */
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

/**
 * Run the code with the parameters of command
 */
cash(command);
