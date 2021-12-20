function gt(value, num) {
  if (typeof value === 'number') {
    return value > num;
  } else if (Array.isArray(value)) {
    return value.length > num;
  } else {
    throw new Error('value is neither number nor array');
  }
}

module.exports = function dependenciesNeedUpdating() {
  const childProcess = require('child_process');
  const result = JSON.parse(childProcess.execSync('npm install --dry-run --json').toString());
  return gt(result.added, 0) || 
         (result.changed !== undefined && gt(result.changed, 0)) || 
         (result.updated !== undefined && gt(result.updated, 0)) || 
         gt(result.removed, 0);
};
