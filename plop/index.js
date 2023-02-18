const moduleConfig = require("./generators/module.js");
const componentConfig = require("./generators/component.js");

module.exports = {
  generators: [moduleConfig, componentConfig],
};
