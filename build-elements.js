const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-web-components/runtime.js',
    './dist/angular-web-components/polyfills.js',
    // './dist/angular-web-components/scripts.js',
    './dist/angular-web-components/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/angular-web-components.js');
})();