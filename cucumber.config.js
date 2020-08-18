const { defineSupportCode } = require('cucumber');
const cucumberOpts = require('./protractor.conf');

defineSupportCode(({setDefaultTimeout}) => {
  console.info(`Setting default timeout to ${cucumberOpts.defaultTimeout / 1000}s.`);
  setDefaultTimeout(30 * 1000);
});