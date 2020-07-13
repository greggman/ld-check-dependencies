module.exports = function dependenciesNeedUpdating() {
  const childProcess = require('child_process');
  const result = JSON.parse(childProcess.execSync('npm install --dry-run --json').toString());
  return result.added.length > 0 || result.updated.length > 0 || result.removed > 0;
};
