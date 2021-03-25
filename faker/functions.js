'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // add variables to virtual user's context:
  userContext.vars.contentNew = `${Faker.lorem.words()}-new`;
  userContext.vars.contentUpdated = `${Faker.lorem.words()}-edited`;
  // continue with executing the scenario:
  return done();
}