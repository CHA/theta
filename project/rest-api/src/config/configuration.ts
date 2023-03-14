import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const CONFIG_FILE = 'config.yaml';

export default () => {
  return yaml.load(
    readFileSync(join(__dirname, CONFIG_FILE), 'utf8'),
  ) as Record<string, any>;
};