import Module from 'module';
import path from 'path';

const parentModule = module;

export default (code) => {
  const resource = 'test.js';
  const module = new Module(resource, parentModule);
  // eslint-disable-next-line no-underscore-dangle
  module.paths = Module._nodeModulePaths(
    path.resolve(__dirname, '../fixtures')
  );
  module.filename = resource;

  // eslint-disable-next-line no-underscore-dangle
  module._compile(
    `var exportsLoader;${code};module.exports = exportsLoader;`,
    resource
  );

  return module.exports;
};
