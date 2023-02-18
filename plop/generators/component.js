const fs = require("fs");
const files = fs.readdirSync("modules/");

module.exports = {
  generatorName: "generate:component",
  config: {
    description:
      "Generate a UI component with its associates test folder and file",
    prompts: [
      {
        type: "list",
        name: "moduleName",
        message: "folder name => ",
        choices: files,
      },
      {
        type: "input",
        name: "componentName",
        message: "Component name => ",
      },
    ],
    actions: [
      {
        type: "add",
        path: `modules/{{moduleName}}/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx`,
        templateFile: "plop/templates/component/component.hbs",
      },
      {
        type: "add",
        path: `modules/{{moduleName}}/components/{{pascalCase componentName}}/__tests__/{{pascalCase componentName}}.tsx`,
        templateFile: "plop/templates/component/test.hbs",
      },
      {
        type: "add",
        path: `modules/{{moduleName}}/components/{{pascalCase componentName}}/index.ts`,
        templateFile: "plop/templates/component/index.hbs",
      },
      {
        type: "append",
        path: "modules/{{moduleName}}/components/index.ts",
        pattern: /[;]/,
        template: "\nexport * from './{{pascalCase componentName}}';",
      },
    ],
  },
};
