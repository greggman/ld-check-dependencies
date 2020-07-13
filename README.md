# Low Dependency Check Dependencies.

You probably shouldn't use this as it's only 5 lines of code.
Here they are

```
function dependenciesNeedUpdating() {
  const childProcess = require('child_process');
  const result = JSON.parse(childProcess.execSync('npm install --dry-run --json').toString());
  return result.added.length > 0 || result.updated.length > 0 || result.removed > 0;
}

module.exports = dependenciesNeedUpdating;
```

## Usage

```
const dependenciesNeedUpdating = require('ld-check-dependencies');
if (dependenciesNeedUpdating()) {
  throw new Error('please run `npm install`);
}
```

### License

MIT: ... though do 5 lines of code really need a license? ¯\_(ツ)_/¯

