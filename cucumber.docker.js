let common = [
  'features/**/*.feature',
  '--require step_definitions/**/*.js',
  '--format progress-bar',
  '--format node_modules/cucumber-pretty',
  '--tags @Backend'
].join(' ');

module.exports = {
  be: common,
  // More profiles can be added if desired
};
