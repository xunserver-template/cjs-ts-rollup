import { program } from 'commander'

import { description, version } from '../package.json'
program.description(description).version(version)

program.parse();
