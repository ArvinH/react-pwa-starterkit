import path from 'path';
import { writeFile } from './utils';

const COMPONENTS_PATH = path.resolve(`${__dirname}/../src/components`);

const args = process.argv.slice(4);

async function main() {
  const componentName = args[0];

  if (!componentName) throw new Error('Must pass a component name as first argument');

  const javascript = `import React, {Component, PropTypes} from 'react'

import './${componentName}.scss'

export default class ${componentName} extends Component {
  static propTypes = {};
  
  static defaultProps = {};
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render () {
    return (
      <div className="${componentName}">
      </div>
    )
  }
}
`;

  const scss = `.Legend {}
`;

  await Promise.all(
    [
      writeFile(`${COMPONENTS_PATH}/${componentName}/index.js`, javascript),
      writeFile(`${COMPONENTS_PATH}/${componentName}/${componentName}.scss`, scss),
    ]
  );
}

main().then(() => {
  process.exit(0);
}).catch((err) => {
  console.log('Error generating component', err.stack);
  process.exit(1);
});
