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

## Installation

```
npm install --save-dev ld-check-dependencies;
```

## Usage

In JavaScript

```
const dependenciesNeedUpdating = require('ld-check-dependencies');
if (dependenciesNeedUpdating()) {
  throw new Error('please run `npm install`);
}
```

In npm

```
  ...
  "scripts": {
    "build": "ld-check-dependencies && rollup ..."
  },
  ...
```

### License

MIT: ... though do 5 lines of code really need a license? ¯\\_(ツ)_/¯

