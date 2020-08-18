let common = [
  'features/**/*.feature',
  '--require-module ts-node/register',
  '--require step_definitions/**/*.ts',
  '--format progress-bar',
  '--format node_modules/cucumber-pretty',
  '--tags @Backend'
].join(' ');

module.exports = {
  be: common,
  // More profiles can be added if desired
};
